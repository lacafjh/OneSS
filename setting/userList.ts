const userList: userListType = {
    users: ["share@oness.lowb.run", "oness@oness.lowb.run"],
    nickname: {
        "share@oness.lowb.run": '🤝 分享功能测试',
        "oness@oness.lowb.run": '🌟 ☁OneSS † 开发测试用 †',
    }
}
export default userList;

type userListType = {
    users: string[],
    nickname: {
        [userName: string]: string
    }
}

