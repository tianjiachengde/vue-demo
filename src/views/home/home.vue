<template>
    <div>
        <p>{{userName}}</p>
        <Button>点击</Button>
        <a-menu
                mode="inline"
                style="with:256px"
                theme="dark"
        >
        </a-menu>
        <a-input></a-input>
        <a-steps :current="1">
            <a-step>
                <!-- <span slot="title">Finished</span> -->
                <template slot="title">
                    Finished
                </template>
                <span slot="description">This is a description.</span>
            </a-step>
            <a-step title="In Progress" description="This is a description." />
            <a-step title="Waiting" description="This is a description." />
        </a-steps>
    </div>
</template>
<script>
    import { Button,Menu,Steps,Input} from 'ant-design-vue'
    import { mapState,mapGetters} from 'vuex'
    const step = Steps.Step;
    export default {
        name:'home',
        components:{
            Button,
            AMenu: Menu,
            ASteps: Steps,
            AStep: step,
            AInput: Input
        },
        computed:{
            ...mapState({
                nickName: state => {
                    window.console.log(state.user.info.userName)
                    state.user.info.userName
                }
            }),
            ...mapGetters({
                userName:'getCurUserName'
            })
        },
        data(){
           return {
               collapsed: false,
           }
        }
    }
</script>
<style></style>

