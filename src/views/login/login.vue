<template>
    <div>
        <a-form
                class="login-form"
                :form="form"
                @submit="handleSubmit"
        >
            <item>
                <a-input
                        class="login-form-input"
                        placeholder="UserName"
                        size="large"
                        v-decorator=rules.user
                >
                    <a-icon
                            slot="prefix"
                            type="user"
                            style="color: rgba(0,0,0,.25)"
                    />
                </a-input>
            </item>
            <item>
                <a-input
                        maxLength="5"
                        class="login-form-input"
                        size="large"
                        type="Password"
                        placeholder="Password"
                        v-decorator=rules.password
                >
                    <a-icon
                            slot="prefix"
                            type="lock"
                            style="color: rgba(0,0,0,.25)"
                    />
                </a-input>
            </item>
            <a-button type="primary"
                      size="large"
                      html-type="submit"
                      class="login-form-button">登录</a-button>
        </a-form>
    </div>
</template>

<script>
    import { Input,Form,Icon,Button} from 'ant-design-vue'
    import { mapActions } from 'vuex'
    const FormItem = Form.Item;
    export default {
        components:{
            AInput:Input,
            AForm:Form,
            Item:FormItem,
            AIcon:Icon,
            AButton:Button,
        },
        beforeCreate(){
            this.form = this.$form.createForm(this);
        },
        data(){
            return {
                rules:{
                    user:[
                        'user',
                        {
                            rules:[
                                {
                                    required:true,
                                    message:'username is required'
                                },
                                {
                                    max:10,
                                    message:'the maxlength is ten'
                                }
                            ]
                        }
                    ],
                    password:[
                        'password',
                        {
                            rules:[
                                {
                                    required:true,
                                    message:'password is required'
                                }
                            ]
                        }
                    ]
                }
            }
        },
        methods:{
            ...mapActions([
                'login'
            ]),
            handleSubmit(e){
                e.preventDefault();
                this.form.validateFields((err,values) => {
                    if(!err){
                        window.console.log(values);
                        this.login(values);
                        const a = this.$message.loading("login success",0);
                        setTimeout(a,500);
                        this.$router.push({name:'home'})
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .login-form{
        text-align: center;
    }
    .login-form-input{
        max-width: 500px;
    }
    .login-form-button{
        width: 100%;
        max-width: 500px;
    }
</style>
