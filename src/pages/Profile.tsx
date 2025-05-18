import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db, storage } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const MAX_SIZE_MB = 2;

const Profile = () => {
  const { user } = useAuth();
  const [nickname, setNickname] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');

  // Hämta användardata
  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setNickname(data.nickname || '');
          setAvatarUrl(data.avatarUrl || '');
          setPreviewUrl(data.avatarUrl || '');
        }
      };
      fetchData();
    }
  }, [user]);

  const handleSave = async () => {
    if (!user) return;
    try {
      await setDoc(doc(db, 'users', user.uid), {
        nickname,
        avatarUrl,
      });
      alert('✅ Profil sparad!');
    } catch (err) {
      console.error('❌ Fel vid sparning:', err);
      alert('🚫 Något gick fel vid sparning.');
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!user || !e.target.files || !e.target.files[0]) return;
    const file = e.target.files[0];

    // Storlekskontroll
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      alert('❌ Bilden är för stor. Max 2MB.');
      return;
    }

    const storageRef = ref(storage, `avatars/${user.uid}/avatar.jpg`);
    setUploading(true);

    try {
      console.log('🚀 Startar uppladdning:', file.name, file.size, 'bytes');
      await uploadBytes(storageRef, file);
      console.log('✅ Uppladdning klar till:', storageRef.fullPath);

      const url = await getDownloadURL(storageRef);
      console.log('✅ Hämtade avatar URL:', url);

      setAvatarUrl(url);
      setPreviewUrl(url);
      alert('✅ Bild uppladdad!');
    } catch (error) {
      console.error('❌ Fel vid uppladdning:', error);
      alert('🚫 Kunde inte ladda upp bilden.');
    } finally {
      setUploading(false);
    }
  };

  if (!user) return <p className="text-white text-center mt-10">Du måste vara inloggad.</p>;

  return (
    <div className="bg-gray-900 min-h-screen text-white px-4 py-10 flex justify-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Min Profil</h2>

        {/* Avatar */}
        <div className="mb-4 text-center">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Avatar"
              className="w-24 h-24 rounded-full mx-auto object-cover"
            />
          ) : (
            <div className="w-24 h-24 rounded-full mx-auto bg-gray-700 flex items-center justify-center">
              <span className="text-gray-400">Ingen bild</span>
            </div>
          )}
        </div>

        {/* Byt bild */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Byt profilbild:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} className="text-sm" />
          {uploading && <p className="text-green-400 text-sm mt-1">Laddar upp...</p>}
        </div>

        {/* E-post */}
        <div className="mb-4">
          <label className="block text-sm mb-1">E-post:</label>
          <input value={user.email || ''} disabled className="w-full p-2 bg-gray-700 rounded text-white" />
        </div>

        {/* Nickname */}
        <div className="mb-6">
          <label className="block text-sm mb-1">Smeknamn:</label>
          <input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded text-white"
            placeholder="Ex: FestKungen"
          />
        </div>

        {/* Spara */}
        <button
          onClick={handleSave}
          className="w-full bg-green-500 hover:bg-green-600 py-2 px-4 rounded font-semibold text-white"
        >
          Spara profil
        </button>
      </div>
    </div>
  );
};

export default Profile;
