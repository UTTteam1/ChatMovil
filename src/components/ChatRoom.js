import React, { useEffect, useState } from 'react'
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
//import axios from "axios";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

var stompClient = null;
const ChatRoom = () => {
    var axios = require('axios');

    let dataF = [];
    const [list, setList] = useState([]);

    const [privateChats, setPrivateChats] = useState(new Map());

    const [publicChats, setPublicChats] = useState([]);
    const [tab, setTab] = useState("CHATROOM");
    const [userData, setUserData] = useState({
        username: '',
        receivername: '',
        connected: false,
        message: '',
        password: ''
    });
    useEffect(() => {
        console.log(userData);
    }, [userData]);

    
    const Act = (nameF) => {
        console.log(nameF);
        let temp = [];
        dataF.forEach(dat => {
            if(nameF !== dat.user_name){
                temp.push(dat);
                //console.log("son diferentes");
            }
        });
        dataF = temp;
        setList(temp);
    }

    const connect = () => {
        var config = {
            method: 'get',
            url: 'http://192.168.93.121:1921/api/usuario/' + userData.username + '/' + userData.password,
        };
        axios(config)
            .then(function (response) {
                let resp = response.data;
                if (resp.length > 0) {
                    let Sock = new SockJS('http://192.168.93.121:8080/ws');
                    stompClient = over(Sock);
                    stompClient.connect({}, onConnected, onError);
                    resp.forEach(amigo => {
                        dataF.push(amigo);
                    });
                    alertify.success('Bienvenido '+ userData.username);

                } else {
                    alertify.error("Usuario o Contraseña Erronea");
                    return;
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const onConnected = () => {
        setUserData({ ...userData, "connected": true });
        stompClient.subscribe('/chatroom/public', onMessageReceived);
        stompClient.subscribe('/user/' + userData.username + '/private', onPrivateMessage);
        userJoin();
    }

    const userJoin = () => {
        var chatMessage = {
            senderName: userData.username,
            status: "JOIN"
        };
        stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
    }

    const onMessageReceived = (payload) => {
        var payloadData = JSON.parse(payload.body);

        if (payloadData.status === "JOIN") {
            if (!privateChats.get(payloadData.senderName)) {
                privateChats.set(payloadData.senderName, []);
                setPrivateChats(new Map(privateChats));
            }
        } else {
            publicChats.push(payloadData);
            setPublicChats([...publicChats]);
        }

        Act(payloadData.senderName);
        

    }

    const onPrivateMessage = (payload) => {
        console.log(payload);
        var payloadData = JSON.parse(payload.body);
        if (privateChats.get(payloadData.senderName)) {
            privateChats.get(payloadData.senderName).push(payloadData);
            setPrivateChats(new Map(privateChats));
        } else {
            let list = [];
            list.push(payloadData);
            privateChats.set(payloadData.senderName, list);
            setPrivateChats(new Map(privateChats));
        }

        Act(payloadData.senderName);

    }

    const onError = (err) => {
        console.log(err);

    }

    const handleMessage = (event) => {
        const { value } = event.target;
        setUserData({ ...userData, "message": value });
    }
    const sendValue = () => {
        console.log(list);
        if (stompClient) {
            var chatMessage = {
                senderName: userData.username,
                message: userData.message,
                status: "MESSAGE"
            };
            console.log(chatMessage);
            stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
            setUserData({ ...userData, "message": "" });

            alertify.success('Mensaje enviado a todos');
        }
    }

    const sendPrivateValue = () => {
        if (stompClient) {
            var chatMessage = {
                senderName: userData.username,
                receiverName: tab,
                message: userData.message,
                status: "MESSAGE"
            };

            if (userData.username !== tab) {
                privateChats.get(tab).push(chatMessage);
                setPrivateChats(new Map(privateChats));
            }
            stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
            setUserData({ ...userData, "message": "" });
            alertify.success('Mensaje enviado a ' + tab);
        }
    }

    const handleUsername = (event) => {
        const { value } = event.target;
        setUserData({ ...userData, "username": value });
    }

    const handlePassword = (event) => {
        const { value } = event.target;
        setUserData({ ...userData, "password": value });
    }

    const registerUser = () => {
        connect();
    }

    return (
        // CHAT
        <div className="container">
            
            {userData.connected ?
            //lista

            
                <div className="chat-box"> 
                <h2>Taquito Chat</h2>

                <div className="member-list">
                        <ul class="list-group list-group-horizontal position-relative overflow-auto w-75">
                            <li  class="list-group-item" onClick={() => { setTab("CHATROOM") }} className={`member ${tab === "CHATROOM" && "active"}`}>Todos</li>

                            {[...privateChats.keys()].map((name, index) => (
                                <li class="list-group-item" onClick={() => { setTab(name) }} className={`member ${tab === name && "active"}`} key={index}>{name}</li>
                            ))}

                            {[...list].map((user, index) => (
                                <li class="list-group-item" className={`member ${tab === user.user_name && "active"}`} key={index}>{user.user_name}</li>
                            ))}

                        </ul>
                    </div>
               
              

                    {tab === "CHATROOM" && <div className="chat-content">
                        <ul className="chat-messages">
                            {publicChats.map((chat, index) => (
                                <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                                    {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                                    <div className="message-data">{chat.message}</div>
                                    {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                                </li>
                            ))}
                        </ul>

                        <div className="send-message">
                            <input type="text" className="input-message" placeholder="Mensaje de texto" value={userData.message} onChange={handleMessage} />
                            <button type="button" className="send-button" onClick={sendValue}><i class="fa fa-send"></i></button>
                        </div>
                    </div>}



                    {tab !== "CHATROOM" && <div className="chat-content">
                        <ul className="chat-messages">
                            {[...privateChats.get(tab)].map((chat, index) => (
                                <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                                    {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                                    <div className="message-data">{chat.message}</div>
                                    {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                                </li>
                            ))}
                        </ul>

                        <div className="send-message">
                            <input type="text" className="input-message" placeholder="Mensaje de texto" value={userData.message} onChange={handleMessage} />
                            <button type="button" className="send-button" onClick={sendPrivateValue}><i class="fa fa-send"></i></button>
                        </div>
                    </div>}
                </div>
                :
                // LOGIN
                <div className="login">
                    <div className="title">
         Login
        </div>
               
                    <input class="row"
                        id="user-name"
                        placeholder="Usuario"
                        name="userName"
                        type="text"
                        value={userData.username}
                        onChange={handleUsername}
                        required
                    />
                   
                  
                    <input class="row"
                        id="Password"
                        placeholder="Contraseña"
                        name="password"
                        type= "password"
                        value={userData.password}
                        onChange={handlePassword}
                        required
                    />
                   
                    <br></br>

                    <button type="button" class="btn btn-outline-dark"
                     onClick={registerUser}>
                        Iniciar
                    </button>
                </div>
                }
        </div>
    )
}

export default ChatRoom
