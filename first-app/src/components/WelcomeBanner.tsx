import React from 'react';

interface WelcomBannerProps{
    title:string
    children?:React.ReactNode;
}

const WelcomBanner: React.FC<WelcomBannerProps> = ({title, children}) =>{
    return(
        <div style = {{backgroundColor: 'lightblue',padding: '10px'}}>
            <h2>{title}</h2>
            {children}
        </div>
    );
};
export default WelcomBanner;