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
    };

    handleArtistChange = (event) => {


        const name = event.target.name;
        const value = event.target.value;
 
        this.setState({
            
        [name]: value
    
        });
    }

    handleMonthChange = (birthOrDeath, event) => {
        const value = event.target.value.split(",");
        const month = value[0];
        const daysInMonth = value[1];

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

    onSubmit = async (artist) => {

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


    render () {
        return (
            <div className="add-artist-container">
                <h2>Add an Artist</h2>
                <form>
                    <input name="firstName" type="text" onChange={this.handleArtistChange}/>
                    <input name="lastName" type="text" onChange={this.handleArtistChange}/>
                    <select name="birthDateMonth" onChange={this.handleMonthChange.bind(this, 'birth')}>
                        {monthsInYear.map((month) => {
                            return (
                                <option value={[month.name, month.days]} data-days={month.days}>{month.name}</option>
                            );
                        })}
                    </select>
                    <select name="birthDateDay" onChange={this.handleArtistChange}>
                        { this.createDaysDropdown('birth') }
                    </select>
                    <input name="birthDateYear" type="text" onChange={this.handleArtistChange}/>

                    <select name="deathDateMonth" onChange={this.handleMonthChange.bind(this, 'death')}>
                        {monthsInYear.map((month) => {
                            return (
                                <option value={[month.name, month.days]} data-days={month.days}>{month.name}</option>
                            );
                        })}
                    </select>
                    <select name="deathDateDay" onChange={this.handleArtistChange}>
                        { this.createDaysDropdown('death') }
                    </select>

                    <input name="deathDateYear" type="text" onChange={this.handleArtistChange} />
                    <textarea name="description" onChange={this.handleArtistChange}></textarea>
                    <input name="image" type="text" onChange={this.handleArtistChange}/>
                </form>
                <button onClick={this.packageArtist}>SUBMIT</button>
            </div>
        );
    }
}

export default AddArtist;