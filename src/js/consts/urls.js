const API = '/api/v1';
const BIN = '/bin/v1';

export const allFolders = () => `${API}/folders`;

export const folderById = id => `${API}/folders/${id}`;

export const image = (id, type = 'small') => `${BIN}/photos/${id}?type=${type}`;

export const photoById = id => `${API}/photos/${id}`;