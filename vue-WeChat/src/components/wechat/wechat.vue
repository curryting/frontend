<template>
    <!--微信组件-->
  <div id="wechat">
    <ul class="wechat-list">
        <!--props传递消息对象 baseMsgObj -->
        <msg-item v-for="baseMsgObj in tempData" :item="baseMsgObj" class="list-row line-bottom" :key="baseMsgObj.mid"></msg-item>
    </ul>
  </div>
</template>
<script>
import contact from '../../vuex/contacts' //存放所有联系人的数据
import Vue from 'vue'
// import {getChatList} from "../../api/chat";//@==>src
// const res= getChatList();
Vue.axios.get('http://localhost:8888/chat/list?uid=1').then((response) => {
  console.log(response.data)
})
// console.log('打印后台返回的数据', res.data.results);

    let tempData = [
            { //普通消息列表
                "mid": 1, //消息的id 唯一标识，重要
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": true, //true；已读 false：未读
                "newMsgCount": 1,
                "quiet": false, // true：消息免打扰 false：提示此好友/群的新消息
                "msg": [{ //对话框的聊天记录 新消息 push 进
                    "text": "有事么",
                    "date": 1488117964495,
                    "name": "curryting",
                    "headerUrl": "/images/header/header01.png"
                }, {
                    "text": '咋啦',
                    "date": 1488117964495,
                    "name": "curryting",
                    "headerUrl": "/images/header/header01.png"
                }],
                "user": [contact.getUserInfo('wxid_zhaohd')] // 此消息的用户数组 长度为1则为私聊 长度大于1则为群聊
            },
            {
                "mid": 4,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 4,
                "quiet": false,
                "msg": [{
                    "text": "长按消息，唤醒消息操作菜单",
                    "date": 1488117964495,
                    "name": "james",
                    "headerUrl": "/images/header/sunquan.jpg"
                }, {
                    "text": '容我三思',
                    "date": 1488117964495,
                    "name": "james",
                    "headerUrl": "/images/header/sunquan.jpg"
                }],
                "user": [contact.getUserInfo('wxid_sunquan')]
            },
        ]

    import msgItem from "../wechat/msg-item"
    export default {
        components: {
            msgItem
        },
        mixins: [window.mixin],
        data() {
            return {
                "pageName": "微信",
                "tempData": tempData
            }
        }
    }
</script>
<style lang="less">
    @import "../../assets/less/wechat.less";
</style>