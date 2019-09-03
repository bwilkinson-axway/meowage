import React from 'react';
import './App.css';
import './Dashboard.css';

function Dashboard({ history }) {
  return (
    <div className='dashboard'>
      <div className='header'>
      <button onClick={() => history.push({pathname: '/edit'})}>Edit Profile</button>
      <img id='logo' src='meowage-white.png' alt='logo'></img>
      <button onClick={() => history.push('/matches')}>See Matches</button>
      </div>
      <div className='meowmeows'>
        <div onClick={() => history.push('/profile')} className='thumb'>
          <img className='profpic' src="https://easysunday.com/blog/wp-content/uploads/2017/11/cat.jpg" alt='cat profile pic'></img>
          <h5> Catticus Finch </h5>
        </div>
        <div onClick={() => history.push('/profile')} className='thumb'>
          <img className='profpic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9PF7oK_J5NFa_N_yU_tZo-GyqMRFSXheHXjQeCoq5Vzx3TfuA8A" alt='cat profile pic'></img>
          <h5> Miz Kitty </h5>
        </div>
        <div onClick={() => history.push('/profile')} className='thumb'>
          <img className='profpic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgqR68owng0H_fCod-If9Y5l4r02lYi6lOc9GvdsaQ8eg6hy65Tw" alt='cat profile pic'></img>
          <h5> Fluffy </h5>
        </div>
        <div onClick={() => history.push('/profile')} className='thumb match'>
          <img className='profpic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9zHwQ5zx_7NFGb6iEzHkZlCbbzJX7x_bWAmvt86dKPlbdmD-" alt='cat profile pic'></img>
          <h5> Samwise Catgi </h5>
        </div>
        <div onClick={() => history.push('/profile')} className='thumb match'>
          <img className='profpic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3MEyjg2RJpF9sxsrHWMpgAQ91LvvM5LCbC59mO-XTcOj2kLf7A" alt='cat profile pic'></img>
          <h5> Meow Zedong </h5>
        </div>
        <div onClick={() => history.push('/profile')} className='thumb match'>
          <img className='profpic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp82tQI4xHdtSSlQ1IEWUPv2JeoeOg_PHkCN3akXj1BCTeRJrDqw" alt='cat profile pic'></img>
          <h5> Randolf </h5>
        </div>
        <div onClick={() => history.push('/profile')} className='thumb'>
          <img className='profpic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzxb06pETCtdF-uX-r1FTGl1czazzA4S8r7CmQozocSvtGJ86-A" alt='cat profile pic'></img>
          <h5> Sake </h5>
        </div>
        <div onClick={() => history.push('/profile')} className='thumb'>
          <img className='profpic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPq69NqSwTly8LNqI24fRskF9NKM47-RyzKrm8jvCG0lBa2nUI" alt='cat profile pic'></img>
          <h5> Snookums </h5>
        </div>
        <div onClick={() => history.push('/profile')} className='thumb match'>
          <img className='profpic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxgj_XBkIAyUi1fZWMsvyiCg0EghBC2REgvaZxXrBO1E_1ocV-Q" alt='cat profile pic'></img>
          <h5> Howard P. Cat </h5>
        </div>
        <div onClick={() => history.push('/profile')} className='thumb'>
          <img className='profpic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57ZurVb3Goqf7VomkoAxQi5QrSfaAgPpVjc2p4g8MZ76rG5kPug" alt='cat profile pic'></img>
          <h5> Garfield </h5>
        </div>
        <div onClick={() => history.push('/profile')} className='thumb'>
          <img className='profpic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbK4pLlCWdwlWm0wx9fhZtiOi0huyWvlZXTSFi9RwORMCuMKZn" alt='cat profile pic'></img>
          <h5> Kate </h5>
        </div>
        <div onClick={() => history.push('/profile')} className='thumb'>
          <img className='profpic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcbU53z7u5aOxKtteKOzDM0cUxOjHUJ6BPIM8_LbGELYWRC56baA" alt='cat profile pic'></img>
          <h5> Rhianna </h5>
        </div>
        <div onClick={() => history.push('/profile')} className='thumb'>
          <img className='profpic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7iP-nzX-3NENlXvC5EeiVGBNSln3t76jPAGnqdUxNnjMrYsI" alt='cat profile pic'></img>
          <h5> Pookie </h5>
        </div>
        <div onClick={() => history.push('/profile')} className='thumb'>
          <img className='profpic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5NJ2X5LGo4tPV15ezKhtZ8-NShJVdelLaW1Y0Wukm5q0Ma5jlw" alt='cat profile pic'></img>
          <h5> Nibblits </h5>
        </div>
        <div onClick={() => history.push('/profile')} className='thumb'>
          <img className='profpic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpriVlrn_CyvIrT66TyoS39vLIxI9mskVWffT2XkVS0pUaCCoq" alt='cat profile pic'></img>
          <h5> Bender </h5>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
