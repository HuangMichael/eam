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

//
// private long id;
// @Column(length = 20)
// private String personNo;
// @Column(length = 20)
// private String personName;
// @Column(length = 50)
// private String email;
// @Column(length = 20)
// private String telephone;
// @Column(length = 1, columnDefinition = "varchar(1) default '1'", nullable = false)
// private String status;
// private Long sortNo;