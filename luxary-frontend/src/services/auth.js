import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const authService = {
  async register(userData) {
    // Transform the data to match backend expectations
    const transformedData = {
      full_name: userData.fullName,
      phone: userData.phoneNumber,
      gender: userData.gender.charAt(0).toUpperCase() + userData.gender.slice(1),
      email: userData.email,
      password: userData.password,
      date_of_birth: userData.dateOfBirth.format('YYYY-MM-DD'),
      aadhar_number: userData.aadharNumber
    };

    const response = await axios.post(`${API_URL}/auth/register`, transformedData);
    return response.data;
  },

  async login(credentials) {
    try {
      // Format the credentials properly
      const loginData = {
        phone: credentials.phone,
        password: credentials.password
      };

      const response = await axios.post(`${API_URL}/auth/login`, loginData);
      
      if (response.data.token && response.data.user) {
        // Set the token first
        this.setAuthToken(response.data.token);
        
        try {
          // Store the user ID for future requests
          const userId = response.data.user.id;
          
          // Fetch complete user details using the user ID
          const userDetailsResponse = await this.getUserDetails(userId);
          
          // Combine token with complete user details
          const completeUserData = {
            token: response.data.token,
            user: userDetailsResponse.data,
            userId: userId // Store userId for future use
          };
          
          // Store complete user data
          localStorage.setItem('user', JSON.stringify(completeUserData));
          return completeUserData;
        } catch (error) {
          // If getting user details fails, return the basic login response
          const basicUserData = {
            token: response.data.token,
            user: response.data.user,
            userId: response.data.user.id
          };
          localStorage.setItem('user', JSON.stringify(basicUserData));
          return basicUserData;
        }
      }
      throw new Error('Login failed: Invalid response data');
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      throw error;
    }
  },

  async getUserDetails(userId) {
    // If userId is not provided, try to get it from localStorage
    if (!userId) {
      const storedUser = this.getCurrentUser();
      userId = storedUser?.userId;
      if (!userId) {
        throw new Error('User ID not found');
      }
    }
    return await axios.get(`${API_URL}/auth/users/${userId}`);
  },

  logout() {
    localStorage.removeItem('user');
  },

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  },

  setAuthToken(token) {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }
};
