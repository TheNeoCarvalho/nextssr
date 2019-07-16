import React from 'react';
import axios from 'axios';
import Link from 'next/link';

const User = ({ repos }) => (
    <div>
      <ul>
        { 
            repos.map(repo => (
                <li key={repo.id}>{repo.name }</li>
            ))
        }
      </ul>
      <Link href="/"><a>Voltar</a></Link>
    </div>
    );

    User.getInitialProps = async () => {
        const response = await axios.get(
            'https://api.github.com/users/TheNeoCarvalho/repos'
        );
        return  { repos: response.data };
    }


export default User;
