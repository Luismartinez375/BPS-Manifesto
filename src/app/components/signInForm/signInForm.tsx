'use client';
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

  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emergencyNameError, setEmergencyNameError] = useState('');
  const [emergencyPhoneError, setEmergencyPhoneError] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setName(inputValue);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setPhone(inputValue);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
  };

  const handleEmergencyNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = e.target.value;
    setEmergencyName(inputValue);
  };

  const handleEmergencyPhoneChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = e.target.value;
    setEmergencyPhone(inputValue);
  };
  const handleNameBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (
      !/^[A-Za-z]+$/.test(e.target.value) ||
      name.length < 2 ||
      !/^[A-Za-z]+$/.test(e.target.value) ||
      name.length > 12
    ) {
      setNameError(
        'Must be 2-12 characters long and have no special characters.'
      );
    } else {
      setNameError('');
    }
  };
  const handlePhoneBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!/^[0-9]+$/.test(e.target.value)) {
      setPhoneError('Phone should only contain digits');
    } else if (phone.length !== 10) {
      setPhoneError('Must enter 10 digit number.');
    } else {
      setPhoneError('');
    }
  };
  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e.target.value)) {
      setEmailError('Email is invalid');
    } else {
      setEmailError('');
    }
  };
  const handleEmergenyNameBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (
      !/^[A-Za-z]+$/.test(e.target.value) ||
      emergencyName.length < 2 ||
      !/^[A-Za-z]+$/.test(e.target.value) ||
      emergencyName.length > 12
    ) {
      setEmergencyNameError(
        'Must be 2-12 characters long and have no special characters.'
      );
    } else {
      setEmergencyNameError('');
    }
  };
  const handleEmergencyPhoneBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!/^[0-9]+$/.test(e.target.value)) {
      setEmergencyPhoneError('should only contain digits');
    } else if (emergencyPhone.length !== 10) {
      setEmergencyPhoneError('Must enter 10 digit number.');
    } else {
      setEmergencyPhoneError('');
    }
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
    let isValid = true;

    setIsFormValid(isValid);
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
    <div className=" font-montserrat w-5/6 h-3/4 bg-form shadow sm:w-3/5 sm:p-5">
      <form
        className=" w-full h-full flex flex-col items-center justify-around"
        onSubmit={handleSubmit}
      >
        <div className=" w-4/5 h-10 rounded outline outline-1">
          <input
            className=" px-2 py-2 w-full h-full bg-inherit focus:outline-none"
            type="text"
            id="name"
            placeholder="Name"
            pattern="[A-Za-z]"
            value={name}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
          />
          {nameError && (
            <div className="text-red-600 text-xs font-inter p-1">
              {nameError}
            </div>
          )}
        </div>
        <div className=" w-4/5 h-10 rounded outline outline-1 ">
          <input
            className=" px-2 py-2 bg-inherit w-full h-full focus:outline-none"
            type="text"
            id="phone"
            placeholder="Phone"
            pattern="[0-9]"
            value={phone}
            onChange={handlePhoneChange}
            onBlur={handlePhoneBlur}
          />
          {phoneError && (
            <div className="text-red-600 text-xs font-inter p-1">
              {phoneError}
            </div>
          )}
        </div>
        <div className=" w-4/5 h-10 rounded outline outline-1">
          <input
            className=" px-2 py-2 bg-inherit w-full h-full focus:outline-none"
            type="text"
            id="email"
            placeholder="Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
          />
          {emailError && (
            <div className="text-red-600 text-xs font-inter p-1">
              {emailError}
            </div>
          )}
        </div>
        <div className=" w-4/5 h-10 rounded outline outline-1">
          <input
            className=" px-2 py-2 bg-inherit w-full h-full focus:outline-none"
            type="text"
            id="emergencyName"
            placeholder="Emergency Contact Name"
            pattern="[A-Za-z]"
            value={emergencyName}
            onChange={handleEmergencyNameChange}
            onBlur={handleEmergenyNameBlur}
          />
          {emergencyNameError && (
            <div className="text-red-600 text-xs font-inter p-1">
              {emergencyNameError}
            </div>
          )}
        </div>
        <div className=" w-4/5 h-10 rounded outline outline-1">
          <input
            className=" px-2 py-2 bg-inherit w-full h-full focus:outline-none"
            type="text"
            id="emergencyPhone"
            placeholder="Emergency Contact Phone"
            pattern="[0-9]"
            value={emergencyPhone}
            onChange={handleEmergencyPhoneChange}
            onBlur={handleEmergencyPhoneBlur}
          />
          {emergencyPhoneError && (
            <div className="text-red-600 text-xs font-inter p-1">
              {emergencyPhoneError}
            </div>
          )}
        </div>
        <button
          className=" font-inter text-white bg-saveButton h-12 w-1/2"
          type="submit"
          disabled={!isFormValid}
        >
          Save and Sign
        </button>
      </form>
    </div>
  );
}