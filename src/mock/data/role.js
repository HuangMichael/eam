import Mock from 'mockjs';
const Roles = [];

for (let i = 0; i < 86; i++) {
    Roles.push(Mock.mock({
        id: Mock.Random.guid(),
        roleName: Mock.Random.cname(),
        roleDesc: Mock.mock('@county(true)')
    }));
}
export {Roles};
