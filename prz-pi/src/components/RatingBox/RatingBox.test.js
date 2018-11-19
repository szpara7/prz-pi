import React from 'react';
import { shallow, mount, render } from 'enzyme';
import RatingBox from './RatingBox.jsx';


describe('<RatingBox />', () => {
    it('sie renderuje', () => {
        var onClick = jasmine.createSpy();
        var ratingBox = mount(<RatingBox onLikeClick={onClick} onDislikeClick={onClick} likes={1} dislikes={2}/>);

        expect(ratingBox.exists()).toBe(true);
    })

    it('zawiera propsy', () => {
        var onClick = jasmine.createSpy();
        var ratingBox = mount(<RatingBox onLikeClick={onClick} onDislikeClick={onClick} likes={1} dislikes={2}/>);

        expect(ratingBox.props().likes).not.toEqual(undefined);
        expect(ratingBox.props().dislikes).not.toBe(undefined);
    })
    
    it('wyświetla poprawanie like/dislike', () => {
        var onClick = jasmine.createSpy();
        var ratingBox = mount(<RatingBox onLikeClick={onClick} onDislikeClick={onClick} likes={5} dislikes={4} />)
      
        expect(ratingBox.props().likes).toEqual(5);
        expect(ratingBox.props().dislikes).toEqual(4);
    })

    it('działa callback like', () => {
        var onClick = jasmine.createSpy();
        var ratingBox = shallow(<RatingBox onLikeClick={onClick} onDislikeClick={onClick} likes={1} dislikes={2} />);

        ratingBox.find('button').first().simulate('click');
        expect(onClick).toHaveBeenCalled();   
    })

    it('działa callback dislike', () => {
        var onClick = jasmine.createSpy();
        var ratingBox = shallow(<RatingBox onLikeClick={onClick} onDislikeClick={onClick} likes={1} dislikes={2}/>);
      
        ratingBox.find('button').last().simulate('click');
        expect(onClick).toHaveBeenCalled();
    })
})