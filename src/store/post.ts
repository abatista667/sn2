import { atom } from "jotai";
import Post from "../models/Post";
import me from '../assets/me.png'


const postAtom = atom<Post[]>([{
    username: 'abatista667',
    img: [me],
    profilePic: me,
    ago: '5h'
}])

export default postAtom;