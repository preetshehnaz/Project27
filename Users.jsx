import React, { useEffect, useState } from 'react'
import { deleteUserApi, getUserListApi, updateUserApi } from '../api/Api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal';

const Users = () => {
    const [UserList, setUserList] = useState([])
    const [flagApiUser, setflagApiUser] = useState(false)
    const [selectedUser, setSelectedUser] = useState({ name: "jass", email: "nadshv" });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleEdit = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const handleUpdate = () => {

        updateUser()
    };
    const getUserList = () => {

        getUserListApi()
            .then(res => {
                console.log(res, "api getUserList in compo");
                if (res.statusCode == 200) {
                    toast.success(res.message, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    setUserList(res.results)
                    setflagApiUser(true);


                }
                else {
                    toast.error(res.message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            }
            )
            .catch((error) => {
                console.error('Error fetching data in component:', error);
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
    };
    const updateUser = () => {
        var userUp = {
            name: selectedUser.name,
            userId: selectedUser._id,
            email: selectedUser.email,
            role: selectedUser.role,
        }

        if (selectedUser.role === '2') {
            userUp = {
                ...userUp,
                profession: selectedUser.profession,
                description: selectedUser.description,
                yearsOfExperience: selectedUser.yearsOfExperience,
            };
        }

        console.log('====================================');
        console.log(selectedUser, userUp);
        console.log('====================================');
        updateUserApi(userUp)
            .then(res => {
                console.log(res, "api updateUser in compo");
                if (res.statusCode == 200) {
                    toast.success(res.message, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });


                    setUserList(UserList.map(user =>
                        user._id === selectedUser._id ? { ...user, ...selectedUser } : user
                    ));
                    setIsModalOpen(false);

                }
                else {
                    toast.error(res.message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            }
            )
            .catch((error) => {
                console.error('Error fetching data in component:', error);
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
    };
    const deleteUser = (userId) => {

        deleteUserApi({ userId })
            .then(res => {
                console.log(res, "api deleteUser in compo");
                if (res.statusCode == 200) {
                    toast.success(res.message, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });


                    setUserList(UserList.filter(user => user._id != userId));

                }
                else {
                    toast.error(res.message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            }
            )
            .catch((error) => {
                console.error('Error fetching data in component:', error);
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
    };


    const userMap = {
        1: "Admin",
        2: "Doctor",
        3: "patient"
    }


    const handleDelete = (id) => {
        deleteUser(id);

    };


    useEffect(() => {
        getUserList();
    }, [])
    return (
        <div className="home-body " >
            <h2 className='yello pt-3 mb-5'>User List</h2>
            {
                UserList.length != 0 &&

                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Sr no.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {UserList.map((user, i) => (
                            <tr key={user._id}>
                                <td>{i + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{userMap[user.role]}</td>

                                <td >
                                    <i class="fa-solid fa-pen-to-square" onClick={() => handleEdit(user)} ></i>
                                    <span>  </span>

                                    <i class="fa-solid fa-trash" onClick={() => handleDelete(user._id)}></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
            {isModalOpen && (
                <Modal
                    selectedUser={selectedUser}
                    setSelectedUser={setSelectedUser}
                    onClose={() => setIsModalOpen(false)}
                    onUpdate={handleUpdate}
                />
            )}
        </div>

    )
}

export default Users