import React, { Component } from 'react'
import axios from 'axios';
import './AddArtist.scss';
import {monthsInYear, maxDaysInMonth} from '../../constants';

class AddArtist extends Component {
    state = {
        firstName: undefined,
        lastName: undefined,
        birthDateMonth: undefined,
        birthDateDay: null,
        birthDateYear: null,
        deathDateMonth: undefined,
        deathDateDay: null,
        deathDateYear: null,
        description: undefined,
        image: null,
        daysInBirthMonth: null,
        daysInDeathMonth: null,
        errorMessage: "",
        editArtist: undefined,
    };

    async componentDidMount() {
        const { artist_id } = this.props.match.params;
        const artist = await this.getArtist(artist_id);
        // this.setState({ editArtist: artist });
        this.prepareArtistToEdit(artist);
    }

    prepareArtistToEdit = (artist) => {
        console.log(artist);

        const firstName = artist.firstName;
        const lastName = artist.lastName;
        const birthDateMonth = monthsInYear[new Date(artist.birthDate).getMonth()].name;
        const birthDateDay = new Date(artist.birthDate).getDate();
        const birthDateYear = new Date(artist.birthDate).getFullYear();
        const deathDateMonth = monthsInYear[new Date(artist.deathDate).getMonth()].name;
        const deathDateDay = new Date(artist.deathDate).getDate();
        const deathDateYear = new Date(artist.deathDate).getFullYear();
        const description = artist.description;
        const image = artist.image;

        if (birthDateMonth) {
            const daysInMonth = monthsInYear[new Date(artist.birthDate).getMonth()].days;
            this.determineDaysInMonth('birth', birthDateMonth, daysInMonth);
        }


        if (deathDateMonth) {
            const daysInMonth = monthsInYear[new Date(artist.deathDate).getMonth()].days;
            this.determineDaysInMonth('death', deathDateMonth, daysInMonth);
        }

        console.log(firstName, lastName, birthDateMonth, birthDateDay, birthDateYear, deathDateDay, deathDateMonth, deathDateYear, description, image);

        this.setState({
            firstName, 
            lastName, 
            birthDateMonth, 
            birthDateDay, 
            birthDateYear,
            deathDateMonth, 
            deathDateDay,
            deathDateYear, 
            description, 
            image 
        });

    }

    getArtist = async (artist_id) => {
        const res = await axios.get(`/artists/${artist_id}`)
        return res.data;
    }

    handleArtistChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
 
        this.setState({
            
        [name]: value
    
        });
    }

    determineDaysInMonth = (birthOrDeath, month, daysInMonth) => {

        console.log("determining days in month", birthOrDeath, month, daysInMonth);

        let stateMonthValue;
        let stateDaysInMonthValue;

        if (birthOrDeath === 'birth') {
            stateMonthValue = 'birthDateMonth';
            stateDaysInMonthValue = 'daysInBirthMonth';
        } else {
            stateMonthValue = 'deathDateMonth';
            stateDaysInMonthValue = 'daysInDeathMonth';
        }

        this.setState({
            
            [stateMonthValue]: month,
    
            [stateDaysInMonthValue]: daysInMonth,
        });
    }

    handleMonthChange = (birthOrDeath, event) => {

        console.log(event.target.value);
        const value = event.target.value.split(",");
        const month = value[0];
        const daysInMonth = value[1];

        this.determineDaysInMonth(birthOrDeath, month, daysInMonth);
    }

    createDaysDropdown(birthOrDeath) {

        let numberOfDays;

        if (birthOrDeath === 'birth') {
            numberOfDays = this.state.daysInBirthMonth ? this.state.daysInBirthMonth : maxDaysInMonth;
        } else {
            numberOfDays = this.state.daysInDeathMonth ? this.state.daysInDeathMonth : maxDaysInMonth;
        }
    
        let options = [];
        
        for (let i = 1; i <= numberOfDays; i++) {
            options.push(<option value={i}>{i}</option>);
        }

        return options;
    }

    packageArtist = () => {
        const artist =  {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            birthDate: new Date(`${this.state.birthDateDay} ${this.state.birthDateMonth} ${this.state.birthDateYear}`),
            deathDate: new Date(`${this.state.deathDateDay} ${this.state.deathDateMonth} ${this.state.deathDateYear}`),
            description: this.state.description,
            image: this.state.image,
        };

        this.onSubmit(artist);
    }

    pushNewArtist = async (artist) => {

        try {
            console.log('SUBMIT!');
            const res = await axios.post('/artists', artist);

            if (res) {
                this.props.getArtists();
                this.props.history.push('/artists');
            }
        } catch(e) {

        }

    }

    editExistingArtist = async artist => {

        const { artist_id } = this.props.match.params;

        console.log("artist id", artist_id);

        try {
            console.log('EDIT!');
            const res = await axios.patch(`/artists/${artist_id}`, artist);
            console.log("res is", res);

            if (res) {

                this.props.getArtists();
                console.log("res exists", res);
                this.props.history.push('/artists');
            }
        } catch(e) {

            console.log("error is", e);

        }
    }

    onSubmit = (artist) => {

        if (!this.props.edit) {
            this.pushNewArtist(artist);
    
        } else {
            this.editExistingArtist(artist)
        }
            
        
    }

    render () {

        const birthMonthValue = this.state.birthDateMonth ? [this.state.birthDateMonth, this.state.daysInBirthMonth] : [monthsInYear[0].name, monthsInYear[0].days];

        const deathMonthValue = this.state.deathDateMonth ? [this.state.deathDateMonth, this.state.daysInDeathMonth] : [monthsInYear[0].name, monthsInYear[0].days];

        return (
            <div className="add-artist-container">
                <h2>Add an Artist</h2>
                <form>
                    <input name="firstName" value={this.state.firstName} type="text" onChange={this.handleArtistChange}/>
                    <input name="lastName" value={this.state.lastName} type="text" onChange={this.handleArtistChange}/>
                    <select name="birthDateMonth" value={ birthMonthValue } onChange={this.handleMonthChange.bind(this, 'birth')}>
                        {monthsInYear.map((month) => {
                            return (
                                <option value={[month.name, month.days]} data-days={month.days}>{month.name}</option>
                            );
                        })}
                    </select>
                    <select name="birthDateDay" value={this.state.birthDateDay} onChange={this.handleArtistChange}>
                        { this.createDaysDropdown('birth') }
                    </select>
                    <input name="birthDateYear" value={this.state.birthDateYear} type="text" onChange={this.handleArtistChange}/>

                    <select name="deathDateMonth" value={ deathMonthValue } onChange={this.handleMonthChange.bind(this, 'death')}>
                        {monthsInYear.map((month) => {
                            return (
                                <option value={[month.name, month.days]} data-days={month.days}>{month.name}</option>
                            );
                        })}
                    </select>
                    <select name="deathDateDay" value={this.state.deathDateDay} onChange={this.handleArtistChange}>
                        { this.createDaysDropdown('death') }
                    </select>

                    <input name="deathDateYear" value={this.state.deathDateYear} type="text" onChange={this.handleArtistChange} />
                    <textarea name="description" value={this.state.description} onChange={this.handleArtistChange}></textarea>
                    <input name="image" value={this.state.image} type="text" onChange={this.handleArtistChange}/>
                </form>
                <button onClick={this.packageArtist}>SUBMIT</button>
            </div>
        );
    }
}

export default AddArtist;