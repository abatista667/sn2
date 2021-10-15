import React, { FC } from "react";
import styles from './List.module.scss'

interface ListProps {
    elements: any[];
    mapper: (item: any) => JSX.Element
}

const List: FC<ListProps> = ({ elements, mapper }) => <ul className={styles.list}>
    {elements.map(item => <li>{mapper(item)}</li>)}
</ul>

export default List;