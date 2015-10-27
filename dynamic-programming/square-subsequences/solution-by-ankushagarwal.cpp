#include <cstdio>
#include <cstring>
#include <algorithm>
using namespace std;

#define REP(i,n) for(int (i)=0,_n=(n);(i)<_n;(i)++)
#define FOR(i,a,b) for(int (i)=(a),_n=(b);(i)<=_n;(i)++)
#define FORD(i,a,b) for(int (i)=(a),_n=(b);(i)>=_n;(i)--)

const int mod = 1000000007;

char s[205];

int dp[205][205][205];
int f(int a, int b, int c) {
	if ( a < 0 || c <= b ) return 0;
	if ( dp[a][b][c] != -1 ) return dp[a][b][c];
	int &ret = dp[a][b][c] = 0;
	if ( s[a] == s[c] ) ret = (1 + f(a-1,b,c) + f(a,b,c-1)) % mod;
	else ret = (((f(a-1,b,c) + f(a,b,c-1) - f(a-1,b,c-1)) % mod) + mod) % mod;
	return ret;
}

int main()
{
	int T;
	scanf( "%d", &T );
	while ( T-- ) {
		scanf( "%s", s );
		memset(dp,-1,sizeof(dp));

		int ans = 0, n = strlen(s);
		FOR(i,0,n-1) FOR(j,i+1,n-1) if ( s[i] == s[j] )
			ans = (ans + f(i-1,i,j-1) + 1) % mod;

		printf( "%d\n", ans );
	}
	return 0;
}