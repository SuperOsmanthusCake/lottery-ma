/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: '',
    text: '特别奖'
  },
  {
    type: 1,
    count: 1,
    text: '特等奖',
    title: 'MAC电脑',
    img: '../img/mac.jpg'
  },
  {
    type: 2,
    count: 1,
    text: '一等奖',
    title: '戴森吹风机',
    img: '../img/戴森.jpg'
  },
  {
    type: 3,
    count: 1,
    text: '二等奖',
    title: '华为手表',
    img: '../img/手表.png'
  },
  {
    type: 4,
    count: 1,
    text: '二等奖',
    title: '蓝牙耳机',
    img: '../img/耳机.png'
  },
  {
    type: 5,
    count: 1,
    text: '三等奖',
    title: '电动剃须刀',
    img: '../img/剃须刀.png'
  },
  {
    type: 6,
    count: 1,
    text: '三等奖',
    title: '音响',
    img: '../img/音响.jpg'
  },
  {
    type: 7,
    count: 1,
    text: '三等奖',
    title: '机械键盘',
    img: '../img/键盘.png'
  }
]

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [0, 1, 1, 1, 1, 1, 1, 1, 1]

/**
 * 卡片公司名称标识
 */
const COMPANY = 'HuiDeAn'

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
}
