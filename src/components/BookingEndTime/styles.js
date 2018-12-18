export const styles = {
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        paddingTop:30,
        paddingRight:15,
        paddingLeft:15,
        paddingBottom: 15,
    },
    switcherContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        switcher: {
            marginRight: 15,
            marginLeft: 15
        },
        text: {
            color: '#9f9f9f',
            fontFamily: 'yantramanavMedium',
            fontSize: 18,
            fontWeight: '500'
        },
        activeText: {
            color: '#1c1c1c'
        }
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        time: {
            color: '#000000',
            fontFamily: 'yantramanavLight',
            fontSize: 100,
            fontWeight: '300',
        },
        separator:{
            marginLeft: 30,
            marginRight: 30,
            paddingBottom: 15
        }
    }
}