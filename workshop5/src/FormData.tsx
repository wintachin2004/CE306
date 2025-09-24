import React, { useState } from 'react';

interface FormData {
    name: string;
    email: string;
}

const FormComponent: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleClear = () => {
        setFormData({
            name: '',
            email: '',
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (formData.name && formData.email) {
            alert(`ชื่อ: ${formData.name}\nอีเมล: ${formData.email}`);
        } else {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', fontFamily: 'Kanit, Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'left', marginBottom: '30px', fontSize: '2em' }}>User Form Exercise - Solution</h1>
            <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '10px', fontSize: '1.2em', fontWeight: 'normal' }}>ชื่อ:</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="กรอกชื่อของคุณ" 
                        style={{ width: '100%', padding: '12px 15px', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1.1em' }}
                    />
                </div>

                <div style={{ marginBottom: '30px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '10px', fontSize: '1.2em', fontWeight: 'normal' }}>อีเมล:</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="กรอกอีเมลของคุณ" 
                        style={{ width: '100%', padding: '12px 15px', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1.1em' }}
                    />
                </div>

                <div style={{ display: 'flex', gap: '15px' }}> 
                    <button 
                        type="submit"
                        style={{ 
                            flex: 1,
                            padding: '12px 25px', 
                            border: 'none', 
                            borderRadius: '5px', 
                            backgroundColor: '#4CAF50', 
                            color: 'white', 
                            fontSize: '1.1em',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        Submit
                    </button>
                    <button 
                        type="button" 
                        onClick={handleClear}
                        style={{ 
                            flex: 1, 
                            padding: '12px 25px', 
                            border: 'none', 
                            borderRadius: '5px', 
                            backgroundColor: '#F44336', 
                            color: 'white', 
                            fontSize: '1.1em',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        Clear
                    </button>
                </div>
            </form>

          
            <div style={{ 
                marginTop: '30px', 
                padding: '20px', 
                border: '1px solid #ddd',
                borderRadius: '8px', 
                backgroundColor: '#f8f8f8', 
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)' 
            }}>
                <h3 style={{ marginTop: '0', fontSize: '1.3em', marginBottom: '15px' }}>ข้อมูลปัจจุบัน:</h3>
                <p style={{ fontSize: '1.1em', marginBottom: '10px' }}>
                    <strong>ชื่อ:</strong> {formData.name === '' ? 'ยังไม่ได้กรอก' : formData.name}
                </p>
                <p style={{ fontSize: '1.1em', marginBottom: '0' }}>
                    <strong>อีเมล:</strong> {formData.email === '' ? 'ยังไม่ได้กรอก' : formData.email}
                </p>
            </div>
        </div>
    );
};

export default FormComponent;