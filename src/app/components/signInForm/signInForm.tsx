"use client"
import { useEffect, useState } from 'react';

export interface IUserForm {
  sampleTextProp: string;
}
export default function UserForm({ sampleTextProp }: IUserForm) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmergencyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmergencyName(e.target.value);
  };

  const handleEmergencyPhoneChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmergencyPhone(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform your insert operation using the form data
    console.log({
      name,
      phone,
      email,
      emergencyName,
      emergencyPhone,
    }); // Replace with your database insertion logic
  };

  const validateForm = () => {
    return (
      name.trim() !== '' &&
      phone.trim() !== '' &&
      email.trim() !== '' &&
      emergencyName.trim() !== '' &&
      emergencyPhone.trim() !== ''
    );
  };

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [name, phone, email, emergencyName, emergencyPhone]);

  return (
    <div className=' font-montserrat w-5/6 h-3/4 bg-form shadow'>
      <form className=' w-full h-full flex flex-col items-center justify-around' onSubmit={handleSubmit}>
        <div className=' w-4/5 h-10 rounded outline outline-1'>
          <input
            className=' px-2 py-2 bg-inherit'
            type="text"
            id="name"
            placeholder='Name'
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className=' w-4/5 h-10 rounded outline outline-1'>
          <input
            className=' px-2 py-2 bg-inherit'
            type="text"
            id="phone"
            placeholder='Phone'
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div className=' w-4/5 h-10 rounded outline outline-1'>
          <input
            className=' px-2 py-2 bg-inherit'
            type="text"
            id="email"
            placeholder='Email'
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className=' w-4/5 h-10 rounded outline outline-1'>
          <input
            className=' px-2 py-2 bg-inherit'
            type="text"
            id="emergencyName"
            placeholder='Emergency Contact Name'
            value={emergencyName}
            onChange={handleEmergencyNameChange}
          />
        </div>
        <div className=' w-4/5 h-10 rounded outline outline-1'>
          <input
            className=' px-2 py-2 bg-inherit'
            type="text"
            id="emergencyPhone"
            placeholder='Emergency Contact Phone'
            value={emergencyPhone}
            onChange={handleEmergencyPhoneChange}
          />
        </div>
        <button className=' font-inter text-white bg-saveButton h-12 w-1/2' type="submit" disabled={!isFormValid}>
          Save and Sign
        </button>
      </form>
    </div>
  );
}
