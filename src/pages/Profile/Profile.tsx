import React from 'react'
import CirclePictureContainer from '../../components/CirclePictureContainer/CirclePictureContainer';
import Form from '../../components/Form/Form';
import Input from '../../components/Input';
import Tabs from "../../components/Tabs/Tabs"
import TextArea from '../../components/TextArea';
import NormalLayout from "../../Layout/Normal";
import styles from './Profile.module.scss'
import me from '../../assets/me.png'

const Personal = () => {
    return (<Form>
        <TextArea name="bio" label="About you:" onChange={() => { }} />
    </Form>);
}
const MyInformation = () => {
    return (<Form>
        <Input name="Username" label="Username:" onChange={() => { }} />
        <Input name="name" label="Full Name:" onChange={() => { }} />
        <Input type="number" name="age" label="Age:" onChange={() => { }} />
    </Form>);
}


const tabs = [
    { title: "Bio", body: <Personal /> },
    { title: "Personal info", body: <MyInformation /> }
]

const Profile = () => {
    return <NormalLayout>
        <div className="profile">
            <CirclePictureContainer src={me} className={styles.profilePicture} />
            <Tabs tabs={tabs} />
        </div>
    </NormalLayout>
}


export default Profile;