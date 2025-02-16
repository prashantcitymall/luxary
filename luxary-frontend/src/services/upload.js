import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const uploadService = {
  async uploadFile(file, phoneNumber, onProgress) {
    try {
      const formData = new FormData();
      formData.append('document', file);
      formData.append('phone', phoneNumber);

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          if (onProgress) {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            onProgress(percentCompleted);
          }
        },
      };

      // Get the auth token from localStorage
      const userStr = localStorage.getItem('user');
      if (!userStr) {
        throw new Error('Authentication required. Please login first.');
      }

      const user = JSON.parse(userStr);
      if (!user.token) {
        throw new Error('Authentication token not found. Please login again.');
      }

      // Add auth token to headers
      config.headers['Authorization'] = `Bearer ${user.token}`;

      const response = await axios.post(`${API_URL}/address-docs/upload`, formData, config);
      return response.data;
    } catch (error) {
      console.error('Upload error:', error.response?.data || error.message);
      throw error;
    }
  },

  getAcceptedFileTypes() {
    return {
      // Images
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/gif': ['.gif'],
      'image/webp': ['.webp'],
      // Documents
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.ms-excel': ['.xls'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-powerpoint': ['.ppt'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
      'text/plain': ['.txt'],
    };
  },

  getAcceptedExtensions() {
    const types = this.getAcceptedFileTypes();
    return Object.values(types).flat().join(',');
  },

  validateFile(file) {
    const acceptedTypes = this.getAcceptedFileTypes();
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (file.size > maxSize) {
      throw new Error('File size exceeds 10MB limit');
    }

    const fileType = file.type;
    if (!Object.keys(acceptedTypes).includes(fileType)) {
      throw new Error('File type not supported');
    }

    return true;
  }
};
