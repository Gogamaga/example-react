// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Image as Img, View, StyleSheet, PanResponder, ViewPropTypes, ScrollView, Dimensions } from 'react-native';
//
//
// // Fallback when RN version is < 0.44
// const viewPropTypes = ViewPropTypes || View.propTypes;
// const image = 'https://www.edrawsoft.com/templates/images/building-security-access.png'
// const windowWidth = Dimensions.get('window').width
//
// export class BookingSeatsDrawing extends Component {
//     static propTypes = {
//         ...viewPropTypes,
//         scalable: PropTypes.bool,
//         minScale: PropTypes.number,
//         maxScale: PropTypes.number
//     };
//
//     static defaultProps = {
//         scalable: true,
//         minScale: 0.5,
//         maxScale: 2
//     };
//
//     constructor(props){
//         super(props);
//         this.state = {
//             scale: 1,
//             lastScale: 1,
//             offsetX: 0,
//             offsetY: 0,
//             lastX: 0,
//             lastY: 0,
//             lastMovePinch: false,
//             imageSize: {
//                 width: 0,
//                 height: 0
//             }
//         };
//         this.distant = 150;
//     }
//
//     componentWillMount(){
//         this.gestureHandlers = PanResponder.create({
//             onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
//             onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
//             onPanResponderGrant: this._handlePanResponderGrant,
//             onPanResponderMove: this._handlePanResponderMove,
//             onPanResponderRelease: this._handlePanResponderEnd,
//             onPanResponderTerminationRequest: evt => true,
//             onShouldBlockNativeResponder: evt => false
//         });
//     }
//
//     componentDidMount(){
//         Img.getSize(image, (width, height) => this.setState({ imageSize: { width, height } }))
//     }
//
//     _handleStartShouldSetPanResponder = (e, gestureState) => {
//         // don't respond to single touch to avoid shielding click on child components
//         return false;
//     };
//
//     _handleMoveShouldSetPanResponder = (e, gestureState) => {
//         return (
//             this.props.scalable &&
//             (Math.abs(gestureState.dx) > 2 ||
//                 Math.abs(gestureState.dy) > 2 ||
//                 gestureState.numberActiveTouches === 2)
//         );
//     };
//
//     _handlePanResponderGrant = (e, gestureState) => {
//         if (gestureState.numberActiveTouches === 2) {
//             let dx = Math.abs(
//                 e.nativeEvent.touches[ 0 ].pageX - e.nativeEvent.touches[ 1 ].pageX
//             );
//             let dy = Math.abs(
//                 e.nativeEvent.touches[ 0 ].pageY - e.nativeEvent.touches[ 1 ].pageY
//             );
//             let distant = Math.sqrt(dx * dx + dy * dy);
//             this.distant = distant;
//         }
//     };
//
//     _handlePanResponderEnd = (e, gestureState) => {
//         this.setState({
//             lastX: this.state.offsetX,
//             lastY: this.state.offsetY,
//             lastScale: this.state.scale
//         });
//     };
//
//     _handlePanResponderMove = (e, gestureState) => {
//         // zoom
//         if (gestureState.numberActiveTouches === 2) {
//             let dx = Math.abs(
//                 e.nativeEvent.touches[ 0 ].pageX - e.nativeEvent.touches[ 1 ].pageX
//             );
//             let dy = Math.abs(
//                 e.nativeEvent.touches[ 0 ].pageY - e.nativeEvent.touches[ 1 ].pageY
//             );
//             let distant = Math.sqrt(dx * dx + dy * dy);
//             let scale = (distant / this.distant) * this.state.lastScale;
//             //check scale min to max hello
//             if (scale < this.props.maxScale && scale > this.props.minScale) {
//                 this.setState({ scale, lastMovePinch: true });
//             }
//         }
//         // translate
//         else if (gestureState.numberActiveTouches === 1) {
//             if (this.state.lastMovePinch) {
//                 gestureState.dx = 0;
//                 gestureState.dy = 0;
//             }
//             let offsetX = this.state.lastX + gestureState.dx / this.state.scale;
//             let offsetY = this.state.lastY + gestureState.dy / this.state.scale;
//             // if ( offsetX < 0  || offsetY <  0 )
//             this.setState({ offsetX, offsetY, lastMovePinch: false });
//         }
//     };
//
//     render(){
//         const { imageSize } = this.state
//         console.log(this.state.offsetX)
//         return (
//             <View style={
//                 {
//                     width: '100%',
//                     height: '100%',
//                     flex: 1,
//                     justifyContent: 'flex-end',
//                     alignItems: 'center'
//                 }}>
//                 <ScrollView>
//                     <View
//                         style={
//                             {
//                                 width: imageSize.width * this.state.scale,
//                                 height: imageSize.height * this.state.scale,
//                                 // marginBottom: (windowWidth*this.state.scale - windowWidth)/2+10,
//                                 // marginRight:(windowWidth*this.state.scale - windowWidth)/2+10
//                             }}>
//                         <View
//                             {...this.gestureHandlers.panHandlers}
//                             style={[
//                                 styles.container,
//                                 this.props.style,
//                                 {
//                                     transform: [
//                                         { scaleX: this.state.scale },
//                                         { scaleY: this.state.scale },
//                                         // { translateX: this.state.offsetX},
//                                         // { translateY: this.state.offsetY }
//                                     ]
//                                 },
//                             ]}
//                         >
//                             <Img
//                                 source={{ uri: image }}
//                                 style={{
//                                     width: imageSize.width,
//                                     height: imageSize.height,
//                                     // position: 'absolute',
//                                     // left:this.state.offsetX,
//                                     // top:this.state.offsetY
//                                     // zIndex: 25,
//                                 }
//                                 }
//                             />
//                         </View>
//                     </View>
//                 </ScrollView>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // position: 'absolute',
//         // zIndex: 50,
//         // width:500,
//         // height:500
//     }
// });


import React, { Component, Fragment } from 'react'
import { View, Image as Img, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import Gestures from 'react-native-easy-gestures'
import Image from 'react-native-remote-svg'

import { icons } from "../../../resources/icons/icons"
import { positionsDrawing } from "../../../helpers/positionDrawing"
import ButtonForChangeViewPlain from "../../Buttons/ButtonForChangeViewPlain";
import PinchZoomView from 'react-native-pinch-zoom-view';

const image = 'https://www.edrawsoft.com/templates/images/building-security-access.png'

const windowWidth = Dimensions.get('window').width


export class BookingSeatsDrawing extends Component {


    state = {
        imageSize: {
            width: 0,
            height: 0
        }

    }

    componentDidMount(){
        Img.getSize(image, (width, height) => this.setState({ imageSize: { width, height } }))
    }

    _selectSeats = (id) => {
        console.log(id)
    }
    onTouchStart = (e) => {
        // console.log(e.nativeEvent)
    }
    onTouchMove = (e) => {
        console.log(e.nativeEvent)
    }
    onTouchCancel = () => {

    }

    onTouchEnd = () => {

    }

    render(){
        const { imageSize } = this.state
        return (
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>

                {/*<ScrollView>*/}
                {/*<PinchZoomView>*/}
                {/*<View position={{position: 'absolute'}}>*/}
                {/*<Img*/}
                {/*source={{ uri: image }}*/}
                {/*style={{*/}
                {/*width: imageSize.width,*/}
                {/*height: imageSize.height,*/}
                {/*// position: 'absolute',*/}
                {/*zIndex: 25,*/}
                {/*}*/}
                {/*}*/}
                {/*/>*/}
                {/*</View>*/}
                {/*</PinchZoomView>*/}
                {/*<View*/}
                {/*onTouchStart={this.onTouchStart}*/}
                {/*onTouchEnd={this.onTouchEnd}*/}
                {/*onTouchCancel={this.onTouchCancel}*/}
                {/*onTouchMove={this.onTouchMove}*/}
                {/*style={{*/}
                {/*width: imageSize.width * 1.5,*/}
                {/*height: imageSize.height * 1.5*/}
                {/*}}>*/}
                {/*<View style={{transform:[{scale: 1.5}]}}>*/}
                {/*<Img*/}
                {/*source={{ uri: image }}*/}
                {/*style={{*/}
                {/*width: imageSize.width,*/}
                {/*height: imageSize.height,*/}
                {/*// position: 'absolute',*/}
                {/*zIndex: 25,*/}
                {/*}*/}
                {/*}*/}
                {/*/>*/}
                {/*{positionsDrawing.map(position => {*/}
                {/*return (*/}
                {/*<TouchableOpacity*/}
                {/*onPress={() => this._selectSeats(position.id)}*/}
                {/*key={position.id}*/}
                {/*style={{ zIndex: 50, position: 'absolute', left: position.x, top: position.y }}*/}
                {/*>*/}
                {/*<Image*/}
                {/*source={{ uri: icons.circlePointerBlack }}*/}
                {/*style={{ width: 20, height: 20 }}*/}
                {/*/>*/}
                {/*</TouchableOpacity>*/}
                {/*)*/}
                {/*})}*/}
                {/*</View>*/}
                {/*</View>*/}
                {/*</ScrollView>*/}
                <View
                    style={
                        {
                            width: '100%',
                            height: windowWidth / (imageSize.width / imageSize.height),
                            borderColor: '#000',
                            borderStyle: 'solid',
                            borderWidth: 1,
                            overflow: 'hidden',
                            marginBottom: 25,
                        }}>
                    <Gestures
                        draggable={true}
                        rotatable={false}
                        childrenSize={{ width: imageSize.width, height: imageSize.height }}
                        containerHeight={windowWidth / (imageSize.width / imageSize.height)}
                    >
                        <Fragment>
                            {positionsDrawing.map(position => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => this._selectSeats(position.id)}
                                        key={position.id}
                                        style={{ zIndex: 50, position: 'absolute', left: position.x, top: position.y }}
                                    >
                                        <Image
                                            source={{ uri: icons.circlePointerBlack }}
                                            style={{ width: 20, height: 20 }}
                                        />
                                    </TouchableOpacity>
                                )
                            })}
                            <View style={{
                                width: imageSize.width,
                                height: imageSize.height,
                                // position: 'absolute',
                                zIndex: 25,
                            }}>
                                <Img
                                    source={{ uri: image, }}
                                    style={{ width: '100%', height: '100%' }}

                                />
                            </View>
                        </Fragment>
                    </Gestures>
                </View>
                <ButtonForChangeViewPlain style={{ width: 200, bottom: 10, }}/>
            </View>
        )
    }

}