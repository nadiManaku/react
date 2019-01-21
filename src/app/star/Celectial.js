import glamorous from "glamorous";

const Celestial = glamorous.div({
    height: '250px',
    width: '250px',
    borderRadius: '50%',
    
   position: 'absolute',
   margin: 'auto',
   top: '0',
   left: 0,
   bottom: 0,
   right: 0
}, ({theme}) => ({
    background: theme.objectColor,
    border: `10px solid ${theme.objectBorderColor}`,
    ':hover': {
        border: `20px solid ${theme.objectBorderColor}`,
      }
})
)

export default Celestial;