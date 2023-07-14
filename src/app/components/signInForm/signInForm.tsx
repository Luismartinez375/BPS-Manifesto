'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { User } from '../../../../types';
import Input from '../BPS-Input/Input';
export interface IUserForm {
  sampleTextProp: string;
}
interface FormData {
  id: number;
  name: string;
  phoneNumber: string;
  mail: string;
  emergencyName: string;
  emergencyPhone: string;
}

export default function UserForm({ sampleTextProp }: IUserForm) {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    id: -1,
    name: '',
    phoneNumber: '',
    mail: '',
    emergencyName: '',
    emergencyPhone: '',
  });

  const [btnTitle, setButtonTitle] = useState('Save and Sign');
  const [firstChange, setFirstChange] = useState(false);
  const [disable, setDisable] = useState(true);
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emergencyNameError, setEmergencyNameError] = useState('');
  const [emergencyPhoneError, setEmergencyPhoneError] = useState('');

  const handleNameBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      !/^[a-z ,.'-]+$/i.test(e.target.value) ||
      e.target.value.length < 2 ||
      !/^[a-z ,.'-]+$/i.test(e.target.value) ||
      e.target.value.length > 12
    ) {
      setNameError(
        'Must be 2-12 characters long and have no special characters.'
      );
    } else {
      setNameError('');
    }
  };
  const handlePhoneBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!/^[0-9]+$/.test(e.target.value)) {
      setPhoneError('Phone should only contain digits');
    } else if (e.target.value.length !== 10) {
      setPhoneError('Must enter 10 digit number.');
    } else {
      setPhoneError('');
    }
  };
  const handleEmailBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e.target.value)) {
      setEmailError('Email is invalid');
    } else {
      setEmailError('');
    }
  };
  const handleEmergenyNameBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      !/^[a-z ,.'-]+$/i.test(e.target.value) ||
      e.target.value.length < 2 ||
      !/^[a-z ,.'-]+$/i.test(e.target.value) ||
      e.target.value.length > 12
    ) {
      setEmergencyNameError(
        'Must be 2-12 characters long and have no special characters.'
      );
    } else {
      setEmergencyNameError('');
    }
  };
  const handleEmergencyPhoneBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!/^[0-9]+$/.test(e.target.value)) {
      setEmergencyPhoneError('Phone should only contain digits');
    } else if (e.target.value.length !== 10) {
      setEmergencyPhoneError('Must enter 10 digit number.');
    } else {
      setEmergencyPhoneError('');
    }
  };

  const validateInput = () => {
    if (
      nameError &&
      phoneError &&
      emailError &&
      emergencyNameError &&
      emergencyPhoneError
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFirstChange(true);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    switch (name) {
      case 'name':
        console.log('entando');
        handleNameBlur(e);
        break;
      case 'phoneNumber':
        handlePhoneBlur(e);
        break;
      case 'mail':
        handleEmailBlur(e);
        break;
      case 'emergencyName':
        handleEmergenyNameBlur(e);
        break;
      case 'emergencyPhone':
        handleEmergencyPhoneBlur(e);
        break;
    }
  };

  useEffect(() => {
    const edit = localStorage.getItem('Edit Id');
    if (edit) {
      setButtonTitle('Update');
      const dataList = JSON.parse(localStorage.getItem('JSONList') ?? 'null');
      for (let i = 0; i < dataList.length; i++) {
        if (dataList[i].id == edit) {
          setFormData(dataList[i]);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    if (!formData) {
      return; // loading
    }
    if (!firstChange) {
      return;
    }
    validateInput();
  }, [formData]);

  useEffect(() => {
    if (!formData) {
      return; // loading
    }
    if (!firstChange) {
      return;
    }
    validateInput();
  }, [formData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !nameError &&
      !phoneError &&
      !emailError &&
      !emergencyNameError &&
      !emergencyPhoneError
    ) {
      var users: User[] = JSON.parse(
        window.localStorage.getItem('users') || '[]'
      );
      if (window.localStorage.getItem('editId')) {
        var editId = JSON.parse(window.localStorage.getItem('editId') || ' ');
      }
      let maxId: number;
      if (users.length === 0) {
        maxId = 0;
      } else {
        maxId = users[users.length - 1].id;
      }
      if (editId) {
        for (let i = 0; i < users.length; i++) {
          if (users[i].id === editId) {
            users[i].Name = formData.name;
            users[i].PhoneNumber = formData.phoneNumber;
            users[i].Email = formData.mail;
            users[i].EmergenyContactname = formData.emergencyName;
            users[i].EmergencyContact = formData.emergencyPhone;
            window.localStorage.setItem('users', JSON.stringify(users));
            window.localStorage.removeItem('editId');
            window.location.href = '/';
          }
        }
      } else {
        const user: User = {
          id: maxId + 1,
          Name: formData.name,
          PhoneNumber: formData.phoneNumber,
          Email: formData.mail,
          EmergenyContactname: formData.emergencyName,
          EmergencyContact: formData.emergencyPhone,
        };
        users.push(user);
        window.localStorage.setItem('users', JSON.stringify(users));
        console.log('user', user);
      }
      router.push('/');
    }
  };

  return (
    <div className=" font-montserrat w-5/6 h-3/4 bg-form shadow sm:w-3/5 sm:p-5">
      <form
        className=" w-full h-full flex flex-col items-center justify-around"
        onSubmit={handleSubmit}
      >
        {/* INPUT NAME */}
        <Input
          name={'name'}
          placeholder={'Full Name'}
          value={formData.name}
          error={nameError}
          onValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleInputChange(e);
          }}
        />
        {/* INPUT PHONE  */}
        <Input
          name={'phoneNumber'}
          placeholder={'Phone Number'}
          value={formData.phoneNumber}
          error={phoneError}
          onValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleInputChange(e);
          }}
        />

        {/* INPUT MAIL */}
        <Input
          name={'mail'}
          placeholder={'Email'}
          value={formData.mail}
          error={emailError}
          onValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleInputChange(e);
          }}
        />

        {/* INPUT EMERGENCY CONTACT NAME */}
        <Input
          name={'emergencyName'}
          placeholder={'Emergency Contact Name'}
          value={formData.emergencyName}
          error={emergencyNameError}
          onValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleInputChange(e);
          }}
        />

        {/* INPUT EMERGENCY CONTACT PHONE */}
        <Input
          name={'emergencyPhone'}
          placeholder={'Emergency Contact Number'}
          value={formData.emergencyPhone}
          error={emergencyPhoneError}
          onValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleInputChange(e);
          }}
        />
        <button
          disabled={disable}
          type="submit"
          className={`font-inter text-white bg-saveButton h-12 w-1/6 ${
            disable && 'opacity-70'
          }`}
        >
          {btnTitle}
        </button>
      </form>
    </div>
  );
}
