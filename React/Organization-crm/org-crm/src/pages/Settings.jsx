import React, { useState } from 'react';
import { Check, X, Bell, Sun, Mail, RefreshCw, Lock, User, Globe, Database } from 'lucide-react';
import '../styles/Settings.css';

const initialSettings = [
    {
        key: 'theme',
        title: 'Theme Mode',
        description: 'Switch between Light and Dark mode for the application.',
        enabled: false,
        icon: <Sun size={22} />,
    },
    {
        key: 'notifications',
        title: 'Notifications',
        description: 'Enable or disable all system notifications.',
        enabled: true,
        icon: <Bell size={22} />,
    },
    {
        key: 'email',
        title: 'Email Updates',
        description: 'Receive important updates and reports via email.',
        enabled: true,
        icon: <Mail size={22} />,
    },
    {
        key: 'autoSync',
        title: 'Auto Sync',
        description: 'Automatically sync your data every hour.',
        enabled: false,
        icon: <RefreshCw size={22} />,
    },
    {
        key: 'privacy',
        title: 'Privacy Mode',
        description: 'Hide sensitive information and enable privacy features.',
        enabled: false,
        icon: <Lock size={22} />,
    },
    {
        key: 'profile',
        title: 'Profile Visibility',
        description: 'Control who can see your profile and activity.',
        enabled: true,
        icon: <User size={22} />,
    },
    {
        key: 'language',
        title: 'Language Preference',
        description: 'Set your preferred language for the application.',
        enabled: false,
        icon: <Globe size={22} />,
    },
    {
        key: 'backup',
        title: 'Cloud Backup',
        description: 'Enable automatic cloud backup of your data.',
        enabled: true,
        icon: <Database size={22} />,
    },
];


const Settings = ({ darkMode, setDarkMode }) => {

    // Sync theme mode setting with darkMode prop
    const [settings, setSettings] = useState(() => {
        return initialSettings.map(setting =>
            setting.key === 'theme' ? { ...setting, enabled: darkMode } : setting
        );
    });

    // Keep settings[0] (theme) in sync with darkMode prop
    React.useEffect(() => {
        setSettings(prev => prev.map(s =>
            s.key === 'theme' ? { ...s, enabled: darkMode } : s
        ));
    }, [darkMode]);

    // When toggling theme, update both local and global state
    const handleToggle = idx => {
        setSettings(prev => prev.map((s, i) => {
            if (i === idx) {
                if (s.key === 'theme') {
                    setDarkMode(!darkMode);
                    return { ...s, enabled: !darkMode };
                }
                return { ...s, enabled: !s.enabled };
            }
            return s;
        }));
    };

    return (
        <div className="page-container">
            <div className="settings-header">
                <div className="settings-header-title">
                    <h2>User Preferences</h2>
                </div>
            </div>
            <div className="settings-cards">
                <div style={{ flex: 2, minWidth: 340 }}>
                    {settings.map((s, idx) => (
                        <div key={s.key} className={`settings-card${s.enabled ? ' enabled' : ''}`}> 
                            <div className="icon-bg">{s.icon}</div>
                            <div style={{ flex: 1 }}>
                                <div className="card-title">{s.title}</div>
                                <div className="card-desc">{s.description}</div>
                            </div>
                            <button
                                onClick={() => handleToggle(idx)}
                                className="toggle-btn"
                                aria-label={s.enabled ? 'On' : 'Off'}
                            >
                                {s.enabled
                                    ? <>
                                        On
                                        <span style={{ background: 'white', borderRadius: '50%', padding: 2, marginLeft: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Check size={16} style={{ color: '#4caf50', verticalAlign: 'middle' }} />
                                        </span>
                                    </>
                                    : <>
                                        <span style={{ background: 'white', borderRadius: '50%', padding: 2, marginRight: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <X size={16} style={{ color: '#e57373', verticalAlign: 'middle' }} />
                                        </span>
                                        Off
                                    </>
                                }
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Settings;
