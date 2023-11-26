import React, { useState } from 'react';

const Modal = ({ selectedUser, setSelectedUser, onClose, onUpdate }) => {
    console.log('====================================');
    console.log('modal open');
    console.log('====================================');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log('===============value=====================');
        console.log(value);
        console.log('===============value=====================');

        // Update selectedUser for common fields
        setSelectedUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));

        // If the selected role is Doctor (value="2"), update additional fields
        if (name === 'role' && value === '2') {
            setSelectedUser((prevUser) => ({
                ...prevUser,
                profession: '',
                description: '',
                yearsOfExperience: '',
            }));
        }
    };

    const handleUpdateClick = () => {
        onUpdate();
        console.log('click');
        onClose();
    };

    const professions = [
        'Cardiologist',
        'Dermatologist',
        'Orthopedic Surgeon',
        'Pediatrician',
        'Psychiatrist',
        'Ophthalmologist',
        'Gynecologist',
    ];

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h2>Edit User Details</h2>
                <label>
                    Name:
                    <input type="text" name="name" value={selectedUser.name} onChange={handleInputChange} />
                </label>

                <label>
                    Email:
                    <input type="text" name="email" value={selectedUser.email} onChange={handleInputChange} />
                </label>
                <label  className="custom-select-container">
                    Role:
                    <div></div>
                    <select name="role" value={selectedUser.role} onChange={handleInputChange}>
                        <option value="" disabled>Select</option>
                        <option value="1">Admin</option>
                        <option value="2">Doctor</option>
                        <option value="3">Patient</option>
                    </select>
                </label>

                {selectedUser.role === '2' && (
                    <>
                        <label className="custom-select-container">
                            Profession:
                            <select
                                name="profession"
                                value={selectedUser.profession}
                                onChange={handleInputChange}
                            >
                                <option value="" disabled>Select</option>

                                {professions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label>
                            Description:
                            <input
                                type="text"
                                name="description"
                                value={selectedUser.description}
                                onChange={handleInputChange}
                            />
                        </label>

                        <label>
                            Years of Experience:
                            <input
                                type="text"
                                name="yearsOfExperience"
                                value={selectedUser.yearsOfExperience}
                                onChange={handleInputChange}
                            />
                        </label>
                    </>
                )}

                <button onClick={handleUpdateClick}>Update</button>
            </div>
        </div>
    );
};

export default Modal;
