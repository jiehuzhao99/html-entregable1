import { useState } from "react"

// components
import { Form, Input, Select, Radio, Checkbox } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { Space, Button } from "antd";

const { Option } = Select;

const countryOptions = [
    { label: 'Spain', value: 'Spain' },
    { label: 'USA', value: 'USA' },
];

const provinceOptions = [
    { label: 'Madrid', value: 'Madrid' },
    { label: 'Guadalara', value: 'Guadalara' },
];

const hobbiesOptions = [
    { label: 'Football', value: 'Football' },
    { label: 'Basketball', value: 'Basketball' },
    { label: 'Games', value: 'Games' },
    { label: 'Art', value: 'Art' },
];

const genderOptions = [
    { label: 'F', value: 'F' },
    { label: 'M', value: 'M' }
]

const UserForm = () => {
    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [description, setDescription] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [province, setProvince] = useState('');
    const [hobbies, setHobbies] = useState('');

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleChangeGender = (e) => {
        setGender(e.target.value);
    };

    const handleChangeAge = (e) => {
        setAge(e.target.value);
    };

    const handleChangeCountry = (country) => {
        if(country === 'Spain') {
            setCountry(country);
            setProvince('Madrid');
            console.log(province);
        } else {
            setCountry(country);
        }
    };

    const handleChangeProvince = (value) => {
        setProvince(value);
    };

    const handleChangeHobbies = (value) => {
        setHobbies(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, firstName, description, gender, age, country, province, hobbies);
    };

    return ( 
        <div>
            <Space style={{ display: 'block' }}>
            <Form 
                onSubmit={handleSubmit} 
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
            >
                <Input value={name} placeholder="Name" onChange={handleChangeName} />
                <Input value={firstName} placeholder="First Name" onChange={handleChangeFirstName} />
                <TextArea value={description} placeholder="Description" onChange={handleChangeDescription} />
                <Radio.Group options={genderOptions} onChange={handleChangeGender} />
                <Input value={age} placeholder="Age" onChange={handleChangeAge} />
                <Select placeholder="Country" style={{ width: 600 }} onChange={handleChangeCountry} value={country}>
                    {countryOptions.map((country) => (
                    <Option key={country.value}>{country.label}</Option>
                    ))}
                </Select>
                <Select placeholder="Province" style={{ width: 600 }} onChange={handleChangeProvince} value={province}>
                    {provinceOptions.map((province) => (
                    <Option key={province.value}>{province.label}</Option>
                    ))}
                </Select>
                <Checkbox.Group options={hobbiesOptions} onChange={handleChangeHobbies} />
            </Form>
                <Button onClick={handleSubmit}>Submit</Button>
            </Space>
        </div>
     );
}
 
export default UserForm;
