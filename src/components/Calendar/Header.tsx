import { Dayjs } from "dayjs";
import { useContext } from "react";
import LocaleContext from "./LocaleContext";
import lunisolar, { Lunisolar } from "lunisolar";
import zhCn from 'lunisolar/locale/zh-cn'
import allLocales from "./locale";
import { theGods } from "@lunisolar/plugin-thegods";

lunisolar.extend(theGods);
lunisolar.locale(zhCn);

interface HeaderProps {
    value: Date;
    curMonth: Dayjs;
    prevMonthHandler: () => void;
    nextMonthHandler: () => void;
    todayHandler: () => void;
}

type EarthlyBranch = '子' | '丑' | '寅' | '卯' | '辰' | '巳' | '午' | '未' | '申' | '酉' | '戌' | '亥' | string;
type ChineseZodiac = '鼠' | '牛' | '虎' | '兔' | '龙' | '蛇' | '马' | '羊' | '猴' | '鸡' | '狗' | '猪';

const zodiacByEarthlyBranch: Record<EarthlyBranch, ChineseZodiac> = {
    '子': '鼠',
    '丑': '牛',
    '寅': '虎',
    '卯': '兔',
    '辰': '龙',
    '巳': '蛇',
    '午': '马',
    '未': '羊',
    '申': '猴',
    '酉': '鸡',
    '戌': '狗',
    '亥': '猪'
};
function Header(props: HeaderProps) {

    const {
        value,
        curMonth,
        prevMonthHandler,
        nextMonthHandler,
        todayHandler
    } = props;

    const localeContext = useContext(LocaleContext);
    const CalendarContext = allLocales[localeContext.locale];
    const lsr = lunisolar(value);


    return <div className="calendar-header">
        <div className="calendar-header-left">
            <div className="calendar-header-icon" onClick={prevMonthHandler}>&lt;</div>
            <div className="calendar-header-value">{curMonth.format(CalendarContext.formatMonth)}</div>
            <div className="calendar-header-icon" onClick={nextMonthHandler}>&gt;</div>
            <button className="calendar-header-btn" onClick={todayHandler}>{CalendarContext.today}</button>
            <div className="calendar-header-value">{lunisolar(value).format('lM(lL)lD')}</div>
            <div className="calendar-header-value-lunar">{lunisolar(value).char8.year.toString()}年 {zodiacByEarthlyBranch[lunisolar(value).char8.year.branch.toString()]}年 {lunisolar(value).char8.month.toString()}月 {lunisolar(value).char8.day.toString()}日</div>
            <div className="calendar-header-act">
                <div className="calendar-header-act-good">
                    <div className="calendar-header-act-good-icon">宜</div>
                    <div className="calendar-header-act-good-content">{
                        (lsr.theGods.query('good act 3') as God[]).slice(0, 9).map((item: any) => {
                            return `${item} `
                        })
                    }</div>
                </div>
                <div className="calendar-header-act-bad">
                    <div className="calendar-header-act-bad-icon">忌</div>
                    <div className="calendar-header-act-bad-content">{
                        (lsr.theGods.query('bad act 3') as God[]).slice(0, 9).map((item: any) => {
                            return `${item} `
                        })
                    }</div>
                </div>
            </div>
        </div>
    </div>
}

export default Header;
