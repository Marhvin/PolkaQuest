document.getElementById('connectWallet').addEventListener('click', async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      console.log('Connected account:', accounts[0]);
      document.getElementById('login').style.display = 'none';
      document.getElementById('game').style.display = 'block';
    } else {
      alert('Please install MetaMask to play the game');
    }
  });
  
  const typingInput = document.getElementById('typingInput');
  const player1 = document.getElementById('player1');
  const player2 = document.getElementById('player2');
  
  typingInput.addEventListener('input', (event) => {
    const text = event.target.value;
    const progress = Math.min((text.length / 100) * 100, 100); // Assume 100 characters to finish race
    player1.style.left = progress + '%';
  
    // Simulate opponent
    const opponentProgress = Math.min((text.length / 100) * 100, 100);
    player2.style.left = opponentProgress + '%';
  
    if (progress === 100) {
      alert('You won!');
      // Send race result to backend
      fetch('/api/race-result', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ winner: 'player1', loser: 'player2' })
      });
    }
  });
  