import React, { useState } from 'react';
import './UserProfile.css';
import { Link } from 'react-router-dom';
import { 
    Home as HomeIcon, 
    Info as InfoIcon, 
    Notifications as NotificationsIcon,
    PhoneRounded as PhoneRoundedIcon ,
    Key as KeyIcon,
    Link as LinkIcon,
    PhoneIphone as PhoneIphoneIcon,
    Twitter as TwitterIcon,
    Facebook as FacebookIcon,
    Instagram as InstagramIcon,
    Google as GoogleIcon,
    LinkedIn as LinkedInIcon
} from '@mui/icons-material';

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState('account-general');
    const [profilePhoto, setProfilePhoto] = useState('https://bootdey.com/img/Content/avatar/avatar1.png');

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleResetPhoto = () => {
        setProfilePhoto('https://bootdey.com/img/Content/avatar/avatar1.png');
    };

    const menuOptions = [
        { text: 'General', icon: <HomeIcon />, id: 'account-general' },
        { text: 'Change password', icon: <KeyIcon />, id: 'account-change-password' },
        { text: 'Info', icon: <InfoIcon />, id: 'account-info' },
        { text: 'Social links', icon: <PhoneIphoneIcon />, id: 'account-social-links' },
        { text: 'Connections', icon: <LinkIcon />, id: 'account-connections' },
        { text: 'Notifications', icon: <NotificationsIcon />, id: 'account-notifications' }
    ];

    return (
        <div className="container light-style flex-grow-1 container-p-y">
            <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>
            <div className="card overflow-hidden">
                <div className="row no-gutters row-bordered row-border-light">
                    <div className="col-md-3 pt-0">
                        <div className="list-group list-group-flush account-settings-links">
                            {menuOptions.map((item, index) => (
                                <a
                                    key={index}
                                    className={`list-group-item list-group-item-action ${activeTab === item.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(item.id)}
                                >
                                    {item.icon}
                                    {item.text}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="tab-content">
                            {activeTab === 'account-general' && (
                                <div className="tab-pane fade active show" id="account-general">
                                    <div className="card-body media align-items-center">
                                        <img
                                            src={profilePhoto}
                                            alt=""
                                            className="d-block ui-w-80"
                                        />
                                        <div className="media-body ml-4">
                                            <label className="btn btn-outline-primary">
                                                Upload new photo
                                                <input type="file" className="account-settings-fileinput" accept="image/png, image/jpeg, image/gif" onChange={handlePhotoChange} />
                                            </label>
                                            &nbsp;
                                            <button type="button" className="btn btn-default md-btn-flat" onClick={handleResetPhoto}>Reset</button>
                                            <div className="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                                        </div>
                                    </div>
                                    <hr className="border-light m-0" />
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label className="form-label">Username</label>
                                            <input type="text" className="form-control mb-1" value="nmaxwell" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Name</label>
                                            <input type="text" className="form-control" value="Nelle Maxwell" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">E-mail</label>
                                            <input type="text" className="form-control mb-1" value="nmaxwell@mail.com" />
                                            <div className="alert alert-warning mt-3">
                                                Your email is not confirmed. Please check your inbox.
                                                <br />
                                                <a href="javascript:void(0)">Resend confirmation</a>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Company</label>
                                            <input type="text" className="form-control" value="Company Ltd." />
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'account-change-password' && (
                                <div className="tab-pane fade" id="account-change-password">
                                    <div className="card-body pb-2">
                                        <div className="form-group">
                                            <label className="form-label">Current password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">New password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Repeat new password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'account-info' && (
                                <div className="tab-pane fade" id="account-info">
                                    <div className="card-body pb-2">
                                        <div className="form-group">
                                            <label className="form-label">Bio</label>
                                            <textarea className="form-control" rows="5">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu,
                                                dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc.
                                                Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut
                                                lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue
                                                placerat, viverra tellus non, pulvinar risus.
                                            </textarea>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Birthday</label>
                                            <input type="text" className="form-control" value="May 3, 1995" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Country</label>
                                            <select className="custom-select">
                                                <option>USA</option>
                                                <option selected>Canada</option>
                                                <option>UK</option>
                                                <option>Germany</option>
                                                <option>France</option>
                                            </select>
                                        </div>
                                    </div>
                                    <hr className="border-light m-0" />
                                    <div className="card-body pb-2">
                                        <h6 className="mb-4">Contacts</h6>
                                        <div className="form-group">
                                            <label className="form-label">Phone</label>
                                            <input type="text" className="form-control" value="+0 (123) 456 7891" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Website</label>
                                            <input type="text" className="form-control" value="" />
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'account-social-links' && (
                                <div className="tab-pane fade" id="account-social-links">
                                    <div className="card-body pb-2">
                                        <div className="form-group">
                                            <label className="form-label">Twitter</label>
                                            <TwitterIcon className="twitter-icon" />
                                            <input type="text" className="form-control" value="https://twitter.com/user" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Facebook</label>
                                            <FacebookIcon className="facebook-icon" />
                                            <input type="text" className="form-control" value="https://www.facebook.com/user" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Google+</label>
                                            <GoogleIcon className="google-icon" />
                                            <input type="text" className="form-control" value="" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">LinkedIn</label>
                                            <LinkedInIcon className="linkedin-icon" />
                                            <input type="text" className="form-control" value="" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Instagram</label>
                                            <InstagramIcon className="instagram-icon" />
                                            <input type="text" className="form-control" value="https://www.instagram.com/user" />
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'account-connections' && (
                                <div className="tab-pane fade" id="account-connections">
                                    <div className="card-body">
                                        <button type="button" className="btn btn-twitter">
                                            Connect to <strong>Twitter</strong>
                                        </button>
                                    </div>
                                    <hr className="border-light m-0" />
                                    <div className="card-body">
                                        <h5 className="mb-2">
                                            <a href="javascript:void(0)" className="float-right text-muted text-tiny">
                                                <i className="ion ion-md-close"></i> Remove
                                            </a>
                                            <i className="ion ion-logo-google text-google"></i>
                                            You are connected to Google:
                                        </h5>
                                        <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="f9979498818e9c9595b994989095d79a9694">
                                            [email&#160;protected]
                                        </a>
                                    </div>
                                    <hr className="border-light m-0" />
                                    <div className="card-body">
                                        <button type="button" className="btn btn-facebook">
                                            Connect to <strong>Facebook</strong>
                                        </button>
                                    </div>
                                    <hr className="border-light m-0" />
                                    <div className="card-body">
                                        <button type="button" className="btn btn-instagram">
                                            Connect to <strong>Instagram</strong>
                                        </button>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'account-notifications' && (
                                <div className="tab-pane fade" id="account-notifications">
                                    <div className="card-body pb-2">
                                        <h6 className="mb-4">Activity</h6>
                                        <div className="form-group">
                                            <label className="switcher">
                                                <input type="checkbox" className="switcher-input" checked />
                                                <span className="switcher-indicator">
                                                    <span className="switcher-yes"></span>
                                                    <span className="switcher-no"></span>
                                                </span>
                                                <span className="switcher-label">Email me when someone comments on my article</span>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="switcher">
                                                <input type="checkbox" className="switcher-input" checked />
                                                <span className="switcher-indicator">
                                                    <span className="switcher-yes"></span>
                                                    <span className="switcher-no"></span>
                                                </span>
                                                <span className="switcher-label">Email me when someone answers on my forum thread</span>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="switcher">
                                                <input type="checkbox" className="switcher-input" />
                                                <span className="switcher-indicator">
                                                    <span className="switcher-yes"></span>
                                                    <span className="switcher-no"></span>
                                                </span>
                                                <span className="switcher-label">Email me when someone follows me</span>
                                            </label>
                                        </div>
                                    </div>
                                    <hr className="border-light m-0" />
                                    <div className="card-body pb-2">
                                        <h6 className="mb-4">Application</h6>
                                        <div className="form-group">
                                            <label className="switcher">
                                                <input type="checkbox" className="switcher-input" checked />
                                                <span className="switcher-indicator">
                                                    <span className="switcher-yes"></span>
                                                    <span className="switcher-no"></span>
                                                </span>
                                                <span className="switcher-label">News and announcements</span>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="switcher">
                                                <input type="checkbox" className="switcher-input" />
                                                <span className="switcher-indicator">
                                                    <span className="switcher-yes"></span>
                                                    <span className="switcher-no"></span>
                                                </span>
                                                <span className="switcher-label">Weekly product updates</span>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="switcher">
                                                <input type="checkbox" className="switcher-input" checked />
                                                <span className="switcher-indicator">
                                                    <span className="switcher-yes"></span>
                                                    <span className="switcher-no"></span>
                                                </span>
                                                <span className="switcher-label">Weekly blog digest</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-right mt-3">
                <button type="button" className="btn btn-primary">Save changes</button>
                &nbsp;
                <button type="button" className="btn btn-default">Cancel</button>
            </div>
        </div>
    );
};

export default UserProfile;
