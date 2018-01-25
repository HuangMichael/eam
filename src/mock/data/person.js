/**
 * Created by Administrator on 2018/1/25.
 */
import Mock from 'mockjs';
const PersonList = [];

for (let i = 0; i < 100; i++) {
    PersonList.push(Mock.mock({
        id: parseInt(i + 1),
        personNo: i,
        personName: Mock.Random.cname(),
        email: Mock.Random.cname(),
        telephone: "10086",
        status: "1",
        sortNo: i,
    }));
}
export {PersonList};