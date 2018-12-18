export const styles = {
    container: {
        alignItems: 'center'
    },
    imageContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        image: {
            width: '100%',
            height: '100%',
            borderRadius: 40
        },
        button: {
            justifyContent: 'center',
            alignItems: 'center',
            width: 36,
            height: 36,
            borderRadius: 18,
            position: 'absolute',
            bottom: -8,
            right: -8,
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowOffset: { width: 2, height: 0 },
            shadowRadius: 4,
            backgroundColor: '#ffffff',
            icon: {
                width: 18,
                height: 19,
            }
        }
    },
    infoContainer: {
        marginTop: 10,
        name: {
            color: '#1c1c1c',
            fontFamily: 'yantramanav',
            fontSize: 14,
            fontWeight: '700'
        },
        teamNameContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            icon: {
                width: 8,
                height: 8,
                marginRight: 5
            },
            name: {
                color: '#8f8f8f',
                fontFamily: 'yantramanav',
                fontSize: 10,
                fontWeight: '400'
            }
        }
    }
}