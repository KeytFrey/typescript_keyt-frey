import {FC, ReactElement} from 'react'
import { IPhoto } from '../../interfaces/photo'

interface PhotoListProps {
    photos: IPhoto[]
}

export const PhotoList: FC<PhotoListProps> = ({photos}): ReactElement => {

    return (
        <>
            {photos.map(photo => (
                <div key={photo.id}>
                {photo.title}
                <img src={photo.thumbnailUrl}/>
                </div>
            ))}
        </>
    )
}