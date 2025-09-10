import React from 'react';


interface GreentingProps {
    name: string;
    messageCount?: number;
}

const Greenting = (props: GreentingProps) => {
    return (
        <div>
            <h1>สวัสดี, {props.name}!</h1>
            {props.messageCount && <p>คุณมี {props.messageCount} ข้อความใหม่</p>}
        </div>
    );
};
export default Greenting;