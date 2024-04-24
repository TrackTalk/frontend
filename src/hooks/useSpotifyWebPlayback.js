import { useEffect, useState } from "react";
import useTrack from "../store/useTrack";
import { useAuthContext } from "../context/AuthContext";


const useSpotifyWebPlayback = () => {
    const { selectedTrack, setSelectedTrack } = useTrack();
    const { authUser } = useAuthContext();
    const [player, setPlayer] = useState(null);
    console.log("here again ")

    const togglePlay = async () => {
        console.log(player)
        if (!player) {
            console.log("here play pause")

            return;
        }

        // console.log(await player.getCurrentState())

        player.togglePlay().then(() => {
            player.getCurrentState().then(state => {
                if (!state) {
                  console.error('User is not playing music through the Web Playback SDK');
                  return;
                }
              
                var current_track = state.track_window.current_track;
                var next_track = state.track_window.next_tracks[0];
              
                console.log('Currently Playing', current_track);
                console.log('Playing Next', next_track);
              });
        })

        
        // player.getCurrentState().then((state) => {
        //     if (state && state.paused) {
        //         player.resume();
        //     } else {
        //         player.pause();
        //     }
        // });
    };


    useEffect(() => {
        if (!authUser) {
            
            return;
        }// No user is logged in.
        
        const script = document.createElement('script');
        script.src = 'https://sdk.scdn.co/spotify-player.js';
        script.async = true;
        document.body.appendChild(script);

        

        window.onSpotifyWebPlaybackSDKReady = () => {
            
            const player = new Spotify.Player({
                name: 'Track Talk',
                getOAuthToken: (cb) => {
                    cb(authUser.accessToken);
                }
            });

            setPlayer(player)

            player.addListener('initialization_error', ({ message }) => {
                console.error('Initialization error', message);
            });
            player.addListener('authentication_error', ({ message }) => {
                console.error('Authentication error', message);
            });
            player.addListener('account_error', ({ message }) => {
                console.error('Account error', message);
            });
            player.addListener('playback_error', ({ message }) => {
                console.error('Playback error', message);
            });

            // player.addListener('track_change', (state) => {
            //     if (state.track_window && state.track_window.current_track) {
            //       player.pause();
            //       player.load(state.track_window.current_track.uri).then(() => {
            //         player.play();
            //       });
            //     }
            //   });

            // player.addListener('player_state_changed', (state) => {
            //     if (!state) return;
        
            //     if (state.track_window && state.track_window.current_track) {
            //       if (!track || state.track_window.current_track.id !== track.id) {
            //         setTrack(state.track_window.current_track);
            //       }
            //     }
            //   });

            

            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
                // player.resume();
                setPlayer(player);
            });

            // Not Ready
            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            player.addListener('player_state_changed', ( state => {

                if (!state) {
                    return;
                }

                setSelectedTrack(state.track_window.current_track);

                player.getCurrentState().then( state => { 
                    (!state)? console.log("no state") : console.log("here is state")
                });

            }));

            // Connect to the player!
            player.connect().then((success) => {
                if (success) {
                    
                    console.log('The Web Playback SDK successfully connected to Spotify!');
                }
                
            });

            return () => {
                player.disconnect();
            };
        }
    }, [authUser, setPlayer, setSelectedTrack]);
    return { player, togglePlay };
};

export default useSpotifyWebPlayback;