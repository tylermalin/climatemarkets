import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Calendar, 
  MapPin, 
  Globe, 
  Shield, 
  Key, 
  Eye,
  EyeOff,
  Edit,
  Save,
  X,
  CheckCircle,
  Award,
  TrendingUp,
  Activity,
  Target,
  Wallet,
  Copy
} from 'lucide-react';
import { UserService, UserProfile } from '../lib/userService';

export function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Get wallet address from localStorage
  const walletAddress = localStorage.getItem('userAddress') || '0x1234567890123456789012345678901234567890';

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const userService = new UserService();
        const profile = await userService.getUserProfile(walletAddress);
        setUserProfile(profile);
      } catch (error) {
        console.error('Error loading user profile:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserProfile();
  }, [walletAddress]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-400">Loading profile...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-black text-white pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-red-400">Failed to load user profile</p>
            <Link to="/dashboard" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const [formData, setFormData] = useState({
    name: userProfile.full_name || '',
    email: userProfile.email || '',
    username: userProfile.username,
    location: userProfile.location || '',
    bio: userProfile.bio || '',
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      const updatedProfile = await UserService.upsertUserProfile({
        wallet_address: walletAddress,
        full_name: formData.name,
        email: formData.email,
        username: formData.username,
        location: formData.location,
        bio: formData.bio
      });
      
      if (updatedProfile) {
        setUserProfile(updatedProfile);
        console.log('Profile saved successfully');
      }
    } catch (error) {
      console.error('Error saving profile:', error);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: userProfile.full_name || '',
      email: userProfile.email || '',
      username: userProfile.username,
      location: userProfile.location || '',
      bio: userProfile.bio || '',
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
    setIsEditing(false);
  };

  const achievements = [
    { icon: Award, title: "First Trade", description: "Completed your first trade", earned: "2023-03-16" },
    { icon: TrendingUp, title: "Profit Maker", description: "Made your first profit", earned: "2023-04-02" },
    { icon: Activity, title: "Active Trader", description: "Completed 50 trades", earned: "2023-06-15" },
    { icon: Target, title: "Sharp Shooter", description: "Achieved 70% win rate", earned: "2023-08-22" }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/dashboard" className="text-blue-400 hover:text-blue-300 flex items-center mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Profile</h1>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Edit className="w-4 h-4" />
              <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                              <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <img
                      src={userProfile.avatar_url || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"}
                      alt={userProfile.full_name || userProfile.username}
                      className="w-24 h-24 rounded-full object-cover border-4 border-gray-800"
                    />
                    {isEditing && (
                      <button className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <h2 className="text-xl font-semibold mt-4">{userProfile.full_name || userProfile.username}</h2>
                  <p className="text-gray-400">@{userProfile.username}</p>
                  <div className="flex items-center justify-center mt-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-500">Verified</span>
                  </div>
                </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">{userProfile.email || 'No email set'}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">Joined {new Date(userProfile.created_at || Date.now()).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">{userProfile.location || 'No location set'}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Key className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300 font-mono">
                    {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-800">
                <h3 className="font-semibold mb-3">Trading Statistics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Trades:</span>
                    <span className="text-white">{userProfile.total_trades || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Win Rate:</span>
                    <span className="text-green-500">{userProfile.win_rate || 0}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Profit:</span>
                    <span className="text-green-500">${(userProfile.total_profit || 0).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Level:</span>
                    <span className="text-blue-500">{userProfile.trading_level || 'Beginner'}</span>
                  </div>
                </div>
              </div>

              {/* Wallet Connection Section */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <h3 className="font-semibold mb-3">Wallet Connection</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Wallet className="w-5 h-5 text-blue-400" />
                      <div>
                        <p className="text-sm text-white font-mono">
                          {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                        </p>
                        <p className="text-xs text-gray-400">BASE Network</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(walletAddress);
                      }}
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                      title="Copy wallet address"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                      <Wallet className="w-4 h-4" />
                      <span>Connect New Wallet</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                      <Globe className="w-4 h-4" />
                      <span>View on Explorer</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex space-x-1 bg-gray-900 rounded-lg p-1 mb-6">
              {[
                { id: 'personal', label: 'Personal Info', icon: User },
                { id: 'security', label: 'Security', icon: Shield },
                { id: 'achievements', label: 'Achievements', icon: Award }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Personal Info Tab */}
            {activeTab === 'personal' && (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        disabled={!isEditing}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white disabled:opacity-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Username
                      </label>
                      <input
                        type="text"
                        value={formData.username}
                        onChange={(e) => handleInputChange('username', e.target.value)}
                        disabled={!isEditing}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      disabled={!isEditing}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      disabled={!isEditing}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Bio
                    </label>
                    <textarea
                      value={formData.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      disabled={!isEditing}
                      rows={4}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white disabled:opacity-50 resize-none"
                    />
                  </div>

                  {isEditing && (
                    <div className="flex space-x-3 pt-4">
                      <button
                        onClick={handleSave}
                        className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <Save className="w-4 h-4" />
                        <span>Save Changes</span>
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex items-center space-x-2 px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        <X className="w-4 h-4" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-6">Security Settings</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formData.currentPassword}
                        onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white pr-12"
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      value={formData.newPassword}
                      onChange={(e) => handleInputChange('newPassword', e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
                    />
                  </div>

                  <div className="pt-4">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Update Password
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-6">Achievements</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                      <div className="flex-shrink-0">
                        <achievement.icon className="w-8 h-8 text-yellow-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{achievement.title}</h4>
                        <p className="text-sm text-gray-400">{achievement.description}</p>
                        <p className="text-xs text-gray-500 mt-1">Earned {achievement.earned}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
