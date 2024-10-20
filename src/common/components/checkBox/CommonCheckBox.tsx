import {FC, memo} from 'react';

import s from './CommonCheckBox.module.css';

interface ICommonCheckBox {
    imgSrc: string,
    changeCheckedValue: () => void,
    checkedStatus: boolean
}

/**
 * Универсальный эмулятор чекбокса.
 * @param {ICommonCheckBox} props - props для "CommonCheckBox".
 * @param {string} props.imgSrc - src для картинки при checked === true.
 * @param {() => void} props.changeCheckedValue - функция для смены статуса.
 * @param {boolean} props.checkedStatus - checked статус.
 * @constructor
 */
export const CommonCheckBox:FC<ICommonCheckBox> = memo(({
  imgSrc,
  changeCheckedValue,
  checkedStatus,
}: ICommonCheckBox) => {
  return (
    <div className={s.fakeCheckBoxContainer} onClick={changeCheckedValue}>
      <img
        src={imgSrc}
        alt="arrow"
        className={checkedStatus ? s.activeImg : ''}
      />
    </div>
  );
});
