/* eslint-disable */

import { getAgeFromBirthdate } from "../utils/date";
import { openCallPhoneNumber, openSendEmail } from "../utils/contact";
import { Button } from "./Button";

const UserCard = ({ user }) => (
  <div className="user-card">
    <img src={user.profilePictureUrl} className="profile-picture" />
    <span className="name">{user.name}</span>
    <div className="text-wrapper">
      <span className="role">{user.role}</span>
      <span className="age">
        {getAgeFromBirthdate(user.birthdate)} years old
      </span>
    </div>
    <div className="actions-wrapper">
      <Button
        variant="ghost"
        text="Call me"
        onClick={() => openCallPhoneNumber(user.phoneNumber)}
      />
      <Button text="Send email" onClick={() => openSendEmail(user.email)} />
    </div>
  </div>
);

export { UserCard };
