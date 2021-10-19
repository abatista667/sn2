import { atom } from "jotai";
import User from "../models/User";

const userAtom = atom<User>({
    username: 'abatista667',
    displayName: 'Ariel Batista',
    age: 32
})

export default userAtom;