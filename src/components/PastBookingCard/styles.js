export const styles = {
    container: {
    },
    cardContainer: {
        height: 95,
        paddingTop: 18,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 4
    },
    locationIconContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        locationLogo: {
            width: 11,
            height: 14
        }
    },
    deckriptionContainer: {
        infoSpaceName: {
            color: '#1c1c1c',
            fontFamily: 'yantramanav',
            fontSize: 18,
            fontWeight: '500',
            padding: 0
        },
        infoSpaceAdress: {
            color: '#9f9f9f',
            fontFamily: 'yantramanav',
            fontSize: 12,
            fontWeight: '400',
        },
        labelContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
            infoLabel: {
                flexDirection: 'row'
            },
            categoryLabel: {
                marginRight: 10
            }
        }
    },
    dashedLine: {
        position: 'absolute',
        top: 0,
        left: 18,
        width: 1,
        height: 140,
        borderColor: '#9f9f9f',
        borderStyle: 'dashed',
        borderWidth: 0.5,
    }
}