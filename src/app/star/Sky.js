import glamorous from 'glamorous';

const Sky = glamorous.div({
    height: '100vh',
    width: '100%',
    position: 'relative'
},
({theme}) => ({
    background: theme.skyColor,
}))

export default Sky;