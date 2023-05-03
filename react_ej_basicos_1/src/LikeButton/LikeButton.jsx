// components
import { Button, Space } from 'antd'
import { HeartOutlined } from '@ant-design/icons';

// hooks
import { useState } from 'react';

const LikeButton = () => {
    const [likes, setLikes] = useState(50);
    const [disabled, setDisabled] = useState(false);

    const handleClickLike = () => {
        setLikes(likes + 1);
        setDisabled(true);
    }

    return ( 
        <div className="container">
            <Space className="enunciado">Botón de likes (el valor de likes estará inicializado a 50). Sólo se puede dar like una vez.</Space>
            <Space wrap>
                <Button icon={<HeartOutlined />} disabled={disabled} onClick={handleClickLike} />
                <p>{likes}</p>
            </Space>
        </div>
     );
}
 
export default LikeButton;