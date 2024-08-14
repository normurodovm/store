import React from 'react';
import { ContactIcon } from '../icons/contact-icon';

export const Header = () => {
    return<>
        <div>
            <ul className='flex gap-6 justify-end'>
                <li>
                    <p className='font-normal text-[16px] '>Доставка и оплата</p>
                    </li>
                <li>
                    <p className='font-normal text-[16px] '>Пункты выдачи</p>
                    </li>
                <li>
                    <p className='font-normal text-[16px] '>Поддержка</p>
                    </li>
                <li className='flex'>
                    <ContactIcon/>
                    <p className='font-normal text-[16px] '>+998 90 253 77 53</p>
                    </li>
            </ul>
        </div>
    </>
}