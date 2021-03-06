/*jshint esversion: 6 */
var PubSub = require('pubsub-js');

export function signUp(name, email, password) {
    return {
        meta: { remote: true },
        type: 'SIGNUP',
        name,
        email,
        password
    };
}

export function login(email, password) {
    return {
        meta: { remote: true },
        type: 'LOGIN',
        email,
        password
    };
}
export function setCurrentNews(current_news) {
    return {
        type: 'SET_CURRENT_NEWS',
        current_news
    };
}

export function getCurrentALLNews() {
    return {
        meta: { remote: true },
        type: 'GET_CURRENT_ALL_NEWS'
    };
}

export function getCurrentNFLNews() {
    PubSub.publish('Reset_Loader');
    return {
        meta: { remote: true },
        type: 'GET_CURRENT_NFL_NEWS'
    };
}

export function getCurrentMLBNews() {
    PubSub.publish('Reset_Loader');
    return {
        meta: { remote: true },
        type: 'GET_CURRENT_MLB_NEWS'
    };
}

export function getCurrentNBANews() {
    PubSub.publish('Reset_Loader');
    return {
        meta: { remote: true },
        type: 'GET_CURRENT_NBA_NEWS'
    };
}

export function getCurrentNHLNews() {
    PubSub.publish('Reset_Loader');
    return {
        meta: { remote: true },
        type: 'GET_CURRENT_NHL_NEWS'
    };
}

export function getScores(game = 'nhl', season = '2017-2018-regular', forDate = 'default') {

    if (season === '2017-2018-regular' && (game === 'nba' || game === 'nhl' || game === 'nfl')) {
        season = '2016-2017-regular';
    }
    if (forDate === 'default') {
        if (season === '2016-2017-regular') {
            if (game === 'mlb') forDate = '20160403';
            else if (game === 'nba') forDate = '20161025';
            else if (game === 'nfl') forDate = '20160908';
            else forDate = '20161012';
        } else if (season === "2017 Playoff") {
            if (game === 'nba') forDate = '20170415';
            else if (game === 'nfl') forDate = '20170107';
            else forDate = '20170412';
        } else if (season === '2015-2016-regular') {
            if (game == 'mlb') forDate = '20150404';
            else if (game === 'nba') forDate = '20151027';
            else if (game === 'nfl') forDate = '20150910';
            else forDate = '20151007';
        } else if (season == "2016 Playoff") {
            if (game == 'mlb') forDate = '20160410';
            else if (game === 'nba') forDate = '20160416';
            else if (game === 'nfl') forDate = '20160109';
            else forDate = '20160413';
        } else if (season === '2014-2015-regular') {
            if (game == 'mlb') forDate = '20140404';
            else if (game === 'nba') forDate = '20141028';
            else if (game === 'nfl') forDate = '20140904';
            else forDate = '20141008';
        } else if (season === '2017-2018-regular') {
            if (game === 'mlb') forDate = '20170402';
            else if (game === 'nba') forDate = '20171020';
            else if (game === 'nfl') forDate = '20170907';
            else forDate = '20171004';
        }
    }
    return {
        meta: { remote: true },
        type: 'GET_SCORES',
        gameType: game,
        season: season,
        forDate: forDate
    };
}

export function getSchedule(game = 'nhl', season = '2017-2018-regular', forDate = 'default', team = 'default') {
    if (season === '2017-2018-regular' && (game === 'nba')) {
        season = '2016-2017-regular';
    }
    if (forDate === 'default') {
        if (season === '2016-2017-regular') {
            if (game === 'mlb') forDate = '20160403';
            else if (game === 'nba') forDate = '20161025';
            else if (game === 'nfl') forDate = '20160908';
            else forDate = '20161012';
        } else if (season === "2017-playoff") {
            if (game === 'nba') forDate = '20170415';
            else if (game === 'nfl') forDate = '20170107';
            else forDate = '20170412';
        } else if (season === '2015-2016-regular') {
            if (game == 'mlb') forDate = '20150404';
            else if (game === 'nba') forDate = '20151027';
            else if (game === 'nfl') forDate = '20150910';
            else forDate = '20151007';
        } else if (season == "2016-playoff") {
            if (game == 'mlb') forDate = '20161004';
            else if (game === 'nba') forDate = '20160416';
            else if (game === 'nfl') forDate = '20160109';
            else forDate = '20160413';
        } else if (season === '2014-2015-regular') {
            if (game == 'mlb') forDate = '20140404';
            else if (game === 'nba') forDate = '20141028';
            else if (game === 'nfl') forDate = '20140904';
            else forDate = '20141008';
        } else if (season === '2017-2018-regular') {
            if (game === 'mlb') forDate = '20170402';
            else if (game === 'nba') forDate = '20171020';
            else if (game === 'nfl') forDate = '20170907';
            else forDate = '20171004';
        }
    }
    console.log("team here:", team);
    return {
        meta: { remote: true },
        type: 'GET_SCHEDULES',
        game,
        season,
        forDate,
        team
    };
}

export function getStandings(game = 'nhl', season = '2017-2018-regular', teamStats = 'default', sortBy = 'default') {
    if (teamStats === 'default') {
        if (game === 'nhl') teamStats = 'W,L,OTW,OTL,PTS,GF,GA';
        else if (game === 'nba') teamStats = 'W,L,Win %,GB,PTS/G,PTSA/G,FG%,3P%,FT%,OREB/G,DREB/G,REB/G,TOV/G';
        else if (game === 'mlb') teamStats = 'W,L,GB,Win %,RF,RA,RUNDIFF,AB,R,H,2B,3B,HR,TB,RBI,AVG,OBP,SLG,OPS';
        else teamStats = 'W,L,T,Win %,PF,PA,PTDIFF,Yds,Att,Avg,Ast,Sacks,SackYds,PD,Lng,TD,Forced,TotalRec';
    }

    if (season === '2017-2018-regular' && (game === 'nba' || game === 'nhl' || game === 'nfl')) {
        season = '2016-2017-regular';
    }

    return {
        meta: { remote: true },
        type: 'GET_STANDINGS',
        game,
        season,
        teamStats,
        sortBy
    };
}

export function getTeamStats(statType, sortBy, game = 'nhl', season = '2017-2018-regular', teamStats = 'default') {
    if (teamStats === 'default') {
        if (game === 'nhl') teamStats = 'W,L,OTW,OTL,PTS,GF,GA,';
        else if (game === 'nba') teamStats = 'W,L,Win %,PTS/G,PTSA/G,FG%,3P%,FT%,OREB/G,DREB/G,REB/G,TOV/G,FGM,3PM/G,FGM/G,FGA/G,3PA/G,FTM/G,FTA/G,AST/G,PF,PF/G,FF1,TF,EJE,F/G';
        else if (game === 'mlb') teamStats = 'W,L,Win %,RF,RA,RUNDIFF,AB,R,H,2B,3B,HR,TB,RBI,AVG,OBP,SLG,OPS,LOB,ERA,SO,IP,ER,BB,SHO,WHIP,TC,E,FPO,A,FDP,PK,FPCT';
        else teamStats = 'W,L,T,Win %,PF,PA,PTDIFF,Yds,Att,Avg,Ast,Sacks,SackYds,PD,Lng,TD,Forced,TotalRec,Blk,Comp,Pct,Yards/Att,Int,QBRating,SackY,NetYds,Fum,20+';
    }

    if (season === '2017-2018-regular' && (game === 'nba' || game === 'nhl' || game === 'nfl')) {
        season = '2016-2017-regular';
    }

    return {
        meta: { remote: true },
        type: 'GET_TEAMSTATS',
        game,
        season,
        teamStats,
        sortBy,
        statType
    };
}

export function getStats(statType, sortBy, game = 'nhl', season = '2017-2018-regular', playerStats = 'default', team = 'default') {
    console.log("statType here:", statType);
    console.log("playerStats here:", playerStats);
    console.log("team here in get stats:", team);
    if (playerStats === 'default') {
        if (game === 'mlb') {
            if (statType === 'batting') playerStats = 'AVG,AB,R,H,2B,3B,HR,RBI,SB,CS,BB,K/9,OBP,SLG,OPS';
            else if (statType === 'pitching') playerStats = 'IP,W,L,SV,SVO,H,R,HR,ER,ERA,BB,K/9,FTP,WHIP';
            else playerStats = 'TC,E,FPO,A,BDP,OF,PK,FDP';
        } else if (game === 'nba') {
            if (statType === 'offense') playerStats = 'MIN/G,PTS,FGA/G,FGM/G,FTA/G,FG%,3PM/G,3PA/G,3P%,FTM/G,FTA/G,FT%,AST,AST/G,PTS';
            else if (statType === 'defense') playerStats = 'MIN/G,OREB,OREB/G,DREB,DREB/G,REB,REB/G,BS,BS/G,STL/G,TOV/G,AST,AST/G,PF/G,PF';
            else playerStats = 'MIN/G,PF,PF/G,FF1,TF,EJE,FF1/G,F/G';
        } else if (game === 'nfl') {
            if (statType === 'offense') playerStats = 'Att,Comp,Pct,Yds,Avg,Lng,TD,Int,Sacks,SackY,QBRating,Yards/Att,Ret,20+,40+,Rec,Made,Blk,2PTAtt';
            else if (statType === 'defence') playerStats = 'Ast,Total,Sacks,SackYds,PD,Int,Yds,Lng,TD,Forced,RecYds,OwnRec,Ret,20+,40+';
            else playerStats = 'Made,Att,FG%,Lng,Made1-19,Att1-19,Made20-29,Att20-29,Made30-39,Att30-39,Made50+,Att50+,Xp%,Ret,Yds,Avg,TD,20+';
        } else {
            if (statType === 'scoring') playerStats = 'G,A,Pts,+/-,PIM,Sh,Sh%,GWG,GTG,PPG,PPA,SHG,SHA';
            else if (statType === 'goaltending') playerStats = 'G,A,Pts,Sh,W,L,OTL,GAA,GA,SA,Sv,Sv%,SO';
            else playerStats = 'G,A,Pts,Sh,Pn,PIM';
        }
    }

    if (season === '2017-2018-regular' && (game === 'nba' || game === 'nhl' || game === 'nfl')) {
        season = '2016-2017-regular';
    }

    return {
        meta: { remote: true },
        type: 'GET_STATS',
        game,
        season,
        sortBy,
        playerStats,
        team
    };
}

export function getTeams(game = 'nhl', season = '2017-2018-regular') {
    var teamStats = 'W';
    if (season === '2017-2018-regular' && (game === 'nba' || game === 'nhl' || game === 'nfl')) {
        season = '2016-2017-regular';
    }
    return {
        meta: { remote: true },
        type: 'GET_TEAMS',
        game,
        season,
        teamStats
    };
}

export function getRoster(game = 'nhl', season = '2016-2017-regular', team = 'default') {
    console.log("season here in getRoster:", season);
    if (season === '2017-2018-regular' && (game === 'nba' || game === 'nhl' || game === 'nfl')) {
        season = '2016-2017-regular';
    }
    return {
        meta: { remote: true },
        type: 'GET_ROSTER',
        game,
        season,
        team
    };
}

function getScoresCallback(game = 'nhl', season = '2017-playoff') {
    return dispatch => {
        dispatch(getScores(game, season));
    }
}

function getScheduleCallback(game = 'nhl', season = '2017-playoff') {
    return dispatch => {
        dispatch(getSchedule(game, season));
    }
}

function getStandingsCallback(game = 'nhl', season = '2017-playoff') {
    return dispatch => {
        dispatch(getStandings(game, season));
    }
}

function getStatsCallback(game = 'nhl', season = '2017-playoff') {
    return dispatch => {
        dispatch(getStats(game, season));
    }
}


export function setConnectionState(state, connected) {
    return {
        type: 'SET_CONNECTION_STATE',
        state,
        connected
    };
}