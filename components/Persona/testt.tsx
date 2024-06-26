"use client";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { useParams } from 'react-router-dom';
import Image from "next/image";
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useEffect, useState } from 'react';
import * as React from 'react';
import './styles.css'
import axios from 'axios';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { FullscreenRounded } from "@mui/icons-material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Modal, Typography } from '@mui/material';

interface Video {
    url: string;
    rating: number;
}
interface Feedback {
    customerName: string;
    feedback: string;
    date: Date;
}
interface Persona {
    _id: string;
    name: string;
    status: string;
    about: string;
    videoParagraph: string;
    videosWalid: Video[];
    videosAmal: Video[];
    rate: number;
    feedbacks: Feedback[];
}


const Restaurant = () => {




    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 8; // however many items you want per page
    const [description, setDescription] = React.useState('');
    const [link, setLink] = React.useState('');
    const [persona, setPersona] = useState<Persona | null>(null);
    const [open, setOpen] = React.useState(false);
    const { id } = useParams<{ id: string }>();
    const [feedback, setFeedback] = useState('');
    const [openAlert, setOpenAlert] = useState(false);
    const [rate1, setRate1] = useState(3);
    const [rate2, setRate2] = useState(3);
    const [rate3, setRate3] = useState(3);
    const [rate4, setRate4] = useState(3);
    const [rate5, setRate5] = useState(3);
    const [rate6, setRate6] = useState(3);
    const [rate7, setRate7] = useState(3);
    const [rate8, setRate8] = useState(3);
    const [rate9, setRate9] = useState(3);
    const [rate10, setRate10] = useState(3);
    const [rate11, setRate11] = useState(3);
    const [rate12, setRate12] = useState(3);
    const [lastClicked1, setLastClicked1] = useState('');
    const [lastClicked2, setLastClicked2] = useState('');
    const [lastClicked3, setLastClicked3] = useState('');
    const [lastClicked4, setLastClicked4] = useState('');
    const [lastClicked5, setLastClicked5] = useState('');
    const [lastClicked6, setLastClicked6] = useState('');
    const [lastClicked7, setLastClicked7] = useState('');
    const [lastClicked8, setLastClicked8] = useState('');
    const [lastClicked9, setLastClicked9] = useState('');
    const [lastClicked10, setLastClicked10] = useState('');
    const [lastClicked11, setLastClicked11] = useState('');
    const [lastClicked12, setLastClicked12] = useState('');
    const [feedback1, setFeedback1] = useState('');
    const [feedback2, setFeedback2] = useState('');
    const [feedback3, setFeedback3] = useState('');
    const [feedback4, setFeedback4] = useState('');
    const [feedback5, setFeedback5] = useState('');
    const [feedback6, setFeedback6] = useState('');
    const [feedback7, setFeedback7] = useState('');
    const [feedback8, setFeedback8] = useState('');
    const [feedback9, setFeedback9] = useState('');
    const [feedback10, setFeedback10] = useState('');
    const [feedback11, setFeedback11] = useState('');
    const [feedback12, setFeedback12] = useState('');
    const [value, setValue] = useState('firstWeek');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const videoData = [
        {
            src: "https://d205gdf6tf9tly.cloudfront.net/24.mp4",
            title: "Presentation of L'Mida",
            ratingState: rate1,
            setRatingState: setRate1,
            feedbackState: [feedback1, setFeedback1],
            lastClickedState: lastClicked1
        },
        {
            src: "https://d205gdf6tf9tly.cloudfront.net/21.mp4",
            title: "L'Mida cocktails 0.1",
            ratingState: rate2,
            setRatingState: setRate2,
            feedbackState: [feedback2, setFeedback2],
            lastClickedState: lastClicked2
        },
        {
            src: "https://d205gdf6tf9tly.cloudfront.net/7.mp4",
            title: " L'Mida cocktails 0.2!",
            ratingState: rate3,
            setRatingState: setRate3,
            feedbackState: [feedback3, setFeedback3],
            lastClickedState: lastClicked3
        },
        {
            src: "https://d205gdf6tf9tly.cloudfront.net/15.mp4",
            title: "L'Mida positive reviews",
            ratingState: rate4,
            setRatingState: setRate4,
            feedbackState: [feedback4, setFeedback4],
            lastClickedState: lastClicked4
        },
        {
            src: "https://d205gdf6tf9tly.cloudfront.net/6.mp4",
            title: "Dive into the Moroccan mediterranean vibes!",
            ratingState: rate5,
            setRatingState: setRate5,
            feedbackState: [feedback5, setFeedback5],
            lastClickedState: lastClicked5
        },
        {
            src: "https://d205gdf6tf9tly.cloudfront.net/22.mp4",
            title: " Dive into the Moroccan mediterranean vibes!",
            ratingState: rate6,
            setRatingState: setRate6,
            feedbackState: [feedback6, setFeedback6],
            lastClickedState: lastClicked6
        },
        {
            src: "https://d205gdf6tf9tly.cloudfront.net/20.mp4",
            title: "Embark on a Journey of Flavor with Our New Menu!.",
            ratingState: rate7,
            setRatingState: setRate7,
            feedbackState: [feedback7, setFeedback7],
            lastClickedState: lastClicked7,
        },
        {
            src: "https://d205gdf6tf9tly.cloudfront.net/4.mp4",
            title: "Transform your events into unforgettable experiences",
            ratingState: rate8,
            setRatingState: setRate8,
            feedbackState: [feedback8, setFeedback8],
            lastClickedState: lastClicked8
        },
        {
            src: "https://d205gdf6tf9tly.cloudfront.net/19.mp4",
            title: "Every dish creates an atmosphere of culinary delight",
            ratingState: rate9,
            setRatingState: setRate9,
            feedbackState: [feedback9, setFeedback9],
            lastClickedState: lastClicked9
        },
        {
            src: "https://d205gdf6tf9tly.cloudfront.net/10.mp4",
            title: "Dive into the Moroccan mediterranean vibes!",
            ratingState: rate10,
            setRatingState: setRate10,
            feedbackState: [feedback10, setFeedback10],
            lastClickedState: lastClicked10
        },
        {
            src: "https://d205gdf6tf9tly.cloudfront.net/23.mp4",
            title: "Embark on a Journey of Flavor with Our New Menu!.",
            ratingState: rate11,
            setRatingState: setRate11,
            feedbackState: [feedback11, setFeedback11],
            lastClickedState: lastClicked11
        },
        {
            src: "https://d205gdf6tf9tly.cloudfront.net/11.mp4",
            title: "Transform your events into unforgettable experiences",
            ratingState: rate12,
            setRatingState: setRate12,
            feedbackState: [feedback12, setFeedback12],
            lastClickedState: lastClicked12
        },
    ];

    // Calculate the current items to display
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = videoData.slice(indexOfFirstItem, indexOfLastItem);


    // Handle change in pagination
    const handleChange = (event: any, value: any) => {
        setCurrentPage(value);
    };


    const handleButtonClick = (index: number, action: any) => {
        // Construct the state setter function name dynamically
        const setLastClicked = `setLastClicked${index + 1}`;

        // Get the corresponding state setter function from the array
        const setLastClickedFunction = eval(setLastClicked);

        // Call the state setter function with the action
        setLastClickedFunction(action);
    };

    const handleButtonClick1 = (action: any) => {
        setLastClicked1(action);
    };
    const handleButtonClick2 = (action: any) => {
        setLastClicked2(action);
    };
    const handleButtonClick3 = (action: any) => {
        setLastClicked3(action);
    };
    const handleButtonClick4 = (action: any) => {
        setLastClicked4(action);
    };
    const handleButtonClick5 = (action: any) => {
        setLastClicked5(action);
    };
    const handleButtonClick6 = (action: any) => {
        setLastClicked6(action);
    };
    const handleButtonClick7 = (action: any) => {
        setLastClicked7(action);
    };
    const handleButtonClick8 = (action: any) => {
        setLastClicked8(action);
    };
    const handleButtonClick9 = (action: any) => {
        setLastClicked9(action);
    };
    const handleButtonClick10 = (action: any) => {
        setLastClicked10(action);
    };
    const handleButtonClick11 = (action: any) => {
        setLastClicked11(action);
    };
    const handleButtonClick12 = (action: any) => {
        setLastClicked12(action);
    };


    const handleSubmit = async () => {
        try {
            axios.post('https://api.elasticemail.com/v2/email/send', null, {
                params: {
                    apikey: 'B1038442B4A8C23147A0EF0916A8A97F5A61BE6A5320B22D89596ED88C421CDF53FD57FBE5714CDF5DBDF8E2FFC8CA2F',
                    subject: "L'Mida Feedback",
                    from: "sarajedlaoui99@gmail.com",
                    to: "benromdhaneeya2000@gmail.com",
                    bodyText: `L Mida feedback:\n video rating:\n video1: rate :${rate1} , decision: ${lastClicked1}, feedback:  ${feedback1}
          \n video2:rate ${rate2}, decision: ${lastClicked2}, feedback:  ${feedback2}
          \n video3:rate ${rate3}, decision: ${lastClicked3}, feedback:  ${feedback3}
          \n video4:rate ${rate4}, decision: ${lastClicked4}, feedback:  ${feedback4}
          \n video5:rate ${rate5}, decision: ${lastClicked5}, feedback:  ${feedback5}
          \n video6:rate ${rate6}, decision: ${lastClicked6}, feedback:  ${feedback6}
          \n video7:rate ${rate7}, decision: ${lastClicked7}, feedback:  ${feedback7}
          \nvideo8:rate ${rate8}, decision: ${lastClicked8}, feedback:  ${feedback8}
          \n video9:rate ${rate9}, decision: ${lastClicked9}, feedback:  ${feedback9}
          \n video10:rate ${rate10}, decision: ${lastClicked10}, feedback:  ${feedback10}
          \n video11:rate ${rate11}, decision: ${lastClicked11}, feedback:  ${feedback11}
          \n video12:rate ${rate12} , decision: ${lastClicked12}, feedback:  ${feedback12} \n 
          Feedback: ${feedback}\n
          `,
                }
            })
            console.log('Reviw Submitted:', rate1, rate3, feedback);
            setOpenAlert(true);
        } catch (error) {
            console.error('Error while saving data:', error);
        }
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <section
                id="Restaurant"
                className="bg-[#e7edec] dark:bg-gray-dark relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div
                                className="wow fadeInUp mx-auto max-w-[800px] text-left"
                                data-wow-delay=".2s"
                            >
                                <h1 className="mb-5 mt-10 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                                    L&apos;Mida San Francisco
                                </h1>
                                <div className="-mx-4 flex flex-wrap px-4">
                                    <div className="flex-1">
                                        <h3 className="mb-5 text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight">
                                            Social Media Strategy
                                        </h3>

                                        <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                                            {'We are dedicated to maintaining a consistent social media posting schedule, with four posts per week, as detailed below:\n\nTuesday: 12 am, 1 am, or 6 am\nThursday: 6 am or 4 pm\nFriday: 2 am, 11 am, or 1 pm\n\nOur advertising strategy involves selecting one video for a 7-day campaign, with the goal of achieving 50 conversions before the video gains viral momentum. Each post will include a captivating caption and relevant hashtags.\n\nOn TikTok, our posting frequency will align with other platforms, with varied timings for optimal engagement:\n\nMonday: 12 PM or 4 PM\nTuesday: 4 AM, 8 AM, 10 AM, or 3 PM\nThursday: 5 AM, 3 PM, or 6 PM\nSunday: 1 AM, 2 AM, 1 PM, 2 PM, or 10 PM\n\nWhile we respect Sunday as a day of rest, it offers ample opportunities for posting, especially on TikTok. This diversified posting strategy aims to maximize our presence and engagement across all platforms.'.split('\n').map((line, index) => (
                                                <React.Fragment key={index}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            ))}
                                        </p>

                                    </div>
                                </div>
                                <div className="flex flex-col pt-5 items-center justify-end space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                                    <button
                                        onClick={handleOpen}
                                        className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-black dark:text-white duration-300 ease-in-out hover:bg-primary/80"
                                    >
                                        Add Video
                                    </button>
                                </div>
                                <h3 className="mb-5 text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight">
                                    Video Ideas
                                </h3>
                                <p className="dark:text-body-color-dark mb-5 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                                    Themes, parties, happy hours
                                </p>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <h3 className="mb-5 text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight">
                                            New Video
                                        </h3>

                                        <TextField
                                            id="description"
                                            label="Description"
                                            variant="standard"
                                            fullWidth
                                            margin="dense"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                        <TextField
                                            id="link"
                                            label="Link"
                                            variant="standard"
                                            fullWidth
                                            margin="dense"
                                            value={link}
                                            onChange={(e) => setLink(e.target.value)}
                                        />
                                        <Button
                                            onClick={() => {
                                                // Here you can handle the submission of the data
                                                console.log(description, link);
                                                handleClose(); // Close the modal after submission
                                            }}
                                            sx={{
                                                mt: 2,
                                                backgroundColor: '#c9f269', // Button background color
                                                color: 'black', // Text color
                                                '&:hover': {
                                                    backgroundColor: '#b0d457', // Slightly darker on hover for feedback
                                                },
                                            }}
                                            variant="contained"
                                        >
                                            Add
                                        </Button>
                                    </Box>
                                </Modal>


                                <div className="-mx-3 flex flex-wrap items-center justify-center mb-5">
                                    {currentItems.map((video, index) => (
                                        <div key={index} className="w-1/2 sm:w-1/4 px-1 py-1 flex items-center justify-center">
                                            <div className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md items-center justify-center" data-wow-delay=".15s">
                                                <div className="mb-5 relative items-center justify-center h-[400px]">
                                                    <video autoPlay muted loop controls className="absolute inset-0 w-full h-full object-cover">
                                                        <source src={video.src} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                </div>
                                                <p className="dark:text-body-color-dark mb-2 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                                                    {index + 1}- {video.title}
                                                </p>
                                                <Rating
                                                    name={`rating-${index}`}
                                                    defaultValue={video.ratingState}
                                                    onChange={(event, newValue) => {
                                                        console.log("New Rating Value:", newValue);
                                                        video.setRatingState(newValue ?? 5);
                                                    }}
                                                    size="large"
                                                    sx={{
                                                        '& .MuiRating-iconFilled': {
                                                            color: 'gold',
                                                        }
                                                    }}
                                                />
                                                <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                                                    <ButtonGroup variant="outlined" color="success" size="small" aria-label="Small button group">
                                                        <Button
                                                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                                                            onClick={() => handleButtonClick(index, 'post')}
                                                        >
                                                            Post
                                                        </Button>
                                                        <Button
                                                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                                                            onClick={() => handleButtonClick(index, 'edit')}
                                                        >
                                                            Edit
                                                        </Button>
                                                        <Button
                                                            sx={{ color: '#083c2f', backgroundColor: '#c9f269', '&:hover': { backgroundColor: '#c9f269' } }}
                                                            onClick={() => handleButtonClick(index, 'discard')}
                                                        >
                                                            Discard
                                                        </Button>
                                                    </ButtonGroup>

                                                </div>
                                                {video.lastClickedState && (
                                                    <p style={{ color: 'red' }}>
                                                        {typeof video.lastClickedState === 'string'
                                                            ? video.lastClickedState
                                                            : 'edited'}
                                                    </p>
                                                )}

                                                <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                                                    <TextField
                                                        onChange={(e) => {
                                                            const setterFunction = video.feedbackState[1];
                                                            if (typeof setterFunction === 'function') {
                                                                setterFunction(e.target.value);
                                                            }
                                                        }}
                                                        id={`feedback-${index}`}
                                                        label="feedback"
                                                        variant="standard"
                                                        fullWidth
                                                        maxRows={4}
                                                        multiline
                                                    />
                                                </div>
                                                <div className="flex flex-col pt-5 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                                                    <button
                                                        onClick={() => {
                                                            const link = document.createElement("a");
                                                            link.href = video.src;
                                                            link.download = "download.mp4"; // You can specify the default filename for the download here
                                                            document.body.appendChild(link); // Append to page
                                                            link.click(); // Programmatically click the link to trigger the download
                                                            document.body.removeChild(link); // Clean up and remove the link
                                                        }}
                                                        className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-black dark:text-white duration-300 ease-in-out hover:bg-primary/80"
                                                    >
                                                        Download
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>




                                <Stack spacing={2} alignItems="center">
                                    <Pagination
                                        count={Math.ceil(videoData.length / itemsPerPage)}
                                        page={currentPage}
                                        onChange={handleChange}
                                        size="large"
                                    />
                                </Stack>


                                <h3 className="mb-5  text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight">
                                    Feedback
                                </h3>
                                <p className="dark:text-body-color-dark mb-5 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                                    Your feedback will be genuinely appreciated.
                                </p>
                                <TextField onChange={(e) => setFeedback(e.target.value)} id="standard-basic" label="" variant="standard" fullWidth maxRows={4} multiline />
                            </div>

                            <div className="flex flex-col pt-10 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                                <button
                                    onClick={handleSubmit}
                                    className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-black dark:text-white duration-300 ease-in-out hover:bg-primary/80"
                                >
                                    Submit Review
                                </button>
                            </div>
                            {openAlert && (
                                <Alert onClose={() => setOpenAlert(false)} severity="success" sx={{ width: '90%' }}>
                                    Review submitted
                                </Alert>
                            )}
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Restaurant;
