import { Avatar, Button, Input, List, Modal, Space } from "antd";
import "./Contact.scss"
import { useEffect, useState } from "react";

const Contact = (props) => {
    const [recordList, setRecordList] = useState([
        {
            "type": 0,
            "message": "I am the storm that is approaching"
        },
        {
            "type": 1,
            "message": "我即是那迫近的风暴"
        },
        {
            "type": 0,
            "message": "provoking black clouds in isolation"
        },
        {
            "type": 1,
            "message": "唤醒樊笼中的乌云"
        },
        {
            "type": 0,
            "message": "I am reclaimer of my name"
        },
        {
            "type": 1,
            "message": "我要收回我的真名"
        },
        {
            "type": 0,
            "message": "Born in flames, I have been blessed"
        },
        {
            "type": 1,
            "message": "生于火焰，受尽祝福"
        },
    ])
    const [friendsList, setFriendsList] = useState([
        {
            "name": "Vergil"
        },
        {
            "name": "Dante"
        },
        {
            "name": "Nero"
        }
    ])
    const [currentFriend, setCurrentFriend] = useState("")

    //好友列表
    let friends = []
    friendsList.map((item) => {
        let friendMsg =
            <div className="friend"
                onClick={() => {
                    setCurrentFriend(item.name)
                }}
                style={{ "backgroundColor": currentFriend == item.name ? "#f2f2f2" : "#e1e1e1" }}
            >
                <div className="friend-avater" />
                <div className="friend-name">{item.name}</div>
            </div>
        friends.push(friendMsg)
    })

    //聊天记录
    let record = []
    recordList.map((item) => {
        let itemText
        if (item.type == 0) {
            itemText =
                <div class="message incoming">
                    <p>{item.message}</p>
                </div>
        } else if (item.type == 1) {
            itemText =
                <div class="message outgoing">
                    <p>{item.message}</p>
                </div>
        }
        record.push(itemText)
    })

    //对话框滚动到底部
    const onClick = () => {
        let message = document.querySelector('.chat-body');
        message.scrollTop = message.scrollHeight;
    }

    return (
        <Modal
            open={props.open}
            footer={null}
            onCancel={() => props.close()}
            wrapClassName="ChatBox"
            style={{ titleFontSize: 50 }}
            maskClosable={false}
        >
            <div className="left">
                {friends}
            </div>
            <div className={currentFriend == '' ? "block" : "unblock"} />
            <div className="right">
                <div className="chat-header">{currentFriend}</div>
                <div className="chat-body">
                    {record}
                </div>
                <div className="chat-footer">
                    <Space.Compact style={{ width: '100%', marginTop: "29px" }}>
                        <Input size="large" />
                        <Button type="primary" size="large" onClick={onClick}>Submit</Button>
                    </Space.Compact>
                </div>
            </div>
        </Modal>
    );
}

export default Contact;